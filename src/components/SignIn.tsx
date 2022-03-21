import { FC } from "react";
import { Button, View } from "react-native";
import * as AuthSession from 'expo-auth-session';
import { connect } from "react-redux";

import { setUserData } from "../reducers/userReducer/actions";

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_REDIRECT_URI } = process.env;

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

type UserProfileResponse = {
  email: string
  family_name: string
  given_name: string
  id: string
  locale: string
  name: string
  picture: string
  verified_email: boolean,
}

interface Props {
  setUserData: Function
}

const SignIn:FC<Props> = ({ setUserData }) => {
  async function handleSignInButton() {
    const accessToken = await signInWithGoogle();

    if (!accessToken) 
      return
    
    const userProfile = await loadProfile(accessToken);

    setUserData({
      name: userProfile.name, 
      token: accessToken, 
      photo: userProfile.picture
    })
  }
  
  async function signInWithGoogle() {
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = 
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { 
      type, params 
    } = await AuthSession.startAsync({authUrl}) as AuthResponse;
    
    if (type === 'success')
      return params.access_token
    else 
      return null
  }

  async function loadProfile(token:string): Promise<UserProfileResponse> {
    const profileAPI = `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`; 
    const response = await fetch(profileAPI);
    const userifo: UserProfileResponse = await response.json();

    return userifo;
  }
  return (
    <View>
      <Button title="Google" onPress={()=>{handleSignInButton()}} />
    </View>
  );
} 

const mapStateToProps = () => {
  return {
    
  }
}

const SignInConect = connect(mapStateToProps, { setUserData })(SignIn);

export default SignInConect;