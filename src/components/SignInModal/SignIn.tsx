import React, { FC } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
// import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import signinWithSocialProvider from "../../modules/user/useCases/signinUseCases";
import { SocialAuthProvider } from "../../modules/user/useCases";
import { setUserData } from "../../reducers/userReducer/actions";
import googleLogo from '../../assets/google-logo.png';
import styles from "./styles";

interface Props {
  setUserData: Function
}

const SignIn:FC<Props> = ({ setUserData }) => {

  async function handleSignInButton() {
    try { 
      const userData = await signinWithSocialProvider(SocialAuthProvider.GOOGLE);

      if (userData)
        setUserData(userData);

      } catch (e) {
      console.error(e)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Christian Radio</Text>
      <Text style={styles.text}>Sign in and save your favorite musics</Text>

      <TouchableOpacity 
        onPress={()=>{handleSignInButton()}} 
        style={styles.buttonContainer}
      >
        <AntDesign name="google" size={40} color="#fff" />
        {/* <Image source={googleLogo} style={styles.butttonIcon} /> */}
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
} 

const mapStateToProps = () => {
  return {
    
  }
}

const SignInConect = connect(mapStateToProps, { setUserData })(SignIn);

export default SignInConect;