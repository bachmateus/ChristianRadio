import React, { FC } from "react"
import { Button, Image, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import Favorites from "../../components/Favorites";

import SignInConect from "../../components/SignInModal/SignIn";
import { SocialAuthProvider } from "../../modules/user/useCases";
// import signoutWithSocialProvider from "../../modules/user/useCases/signoutUseCases";
import { AppReducerTypes } from "../../reducers/types";
import { resetUserData } from "../../reducers/userReducer/actions";

import styles from "./styles";

interface Props {
  name:string
  id:string
  photo:string
  provider: "" | SocialAuthProvider
  resetUserData:Function
}

const Profile:FC<Props> = ({name, id, photo, provider, resetUserData}) => {
  const handleLogout = () => {
    resetUserData()
    // signoutWithSocialProvider(provider);
  }
  
  return (
    <View 
      style={[styles.container, styles.contentContainer]}
    >
      { (id !== undefined && id !== "") && (<>
        <View style={styles.boxProfile}>
          <Image source={{uri:photo}} style={styles.profileImage}/>

          <View style={styles.boxProfileInfo}>
            <Text style={styles.profileName}>{name}</Text>
            
            <TouchableOpacity 
              onPress={handleLogout}
              style={styles.logoutButtonContainer}
            >
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      
        <Favorites />
      </>)}

      { (id === undefined || id === "") && (
        <SignInConect />
      )}
    </View>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    name: state.userReducer.givenName,
    id: state.userReducer.id,
    photo: state.userReducer.photo,
    provider: state.userReducer.providerId
  }
}

const ProfileConect = connect(mapStateToProps, { resetUserData })(Profile);

export default ProfileConect;