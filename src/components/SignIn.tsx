import { Button, View } from "react-native";
import * as AuthSession from 'expo-auth-session';

const { GOOGLE_CLIENT_ID } = process.env;
const { GOOGLE_REDIRECT_URI } = process.env;
const { SPOTIFY_CLIENT_ID } = process.env;

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

export default function SignIn() {
  
  async function handleGoogleSignIn() {
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = 
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

    const { 
      type, params 
    } = await AuthSession.startAsync({authUrl}) as AuthResponse;
  
    if (type === 'success')
      loadProfile(params.access_token)
  }

  async function loadProfile(token:string) {
    const profileAPI = `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`; 
    const response = await fetch(profileAPI);
    const userifo: UserProfileResponse = await response.json();
    console.log(userifo);
  }
  return (
    <View>
      <Button title="Google" onPress={()=>{handleGoogleSignIn()}} />
    </View>
  );
} 