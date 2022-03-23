import React, { FC } from "react";
import { Button, View } from "react-native";
import { connect } from "react-redux";

import signinUseCase from "../../modules/user/useCases/signinUseCases";
import { setUserData } from "../../reducers/userReducer/actions";

interface Props {
  setUserData: Function
}

const SignIn:FC<Props> = ({ setUserData }) => {

  async function handleSignInButton() {
    try {
      const user = await signinUseCase('Google');
      console.log(user);
    } catch (e) {
      console.error(e)
    }
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