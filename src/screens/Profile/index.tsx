import React, { FC } from "react"
import { Button, Image, Modal, Text, View } from "react-native";
import { connect } from "react-redux";

import SignInConect from "../../components/SignInModal/SignIn";
import { AppReducerTypes } from "../../reducers/types";
import { resetUserData } from "../../reducers/userReducer/actions";

interface Props {
  name:string
  id:string
  photo:string
  resetUserData:Function
}

const Profile:FC<Props> = ({name, id, photo, resetUserData}) => {
  const handleLogout = () => {
    resetUserData()
  }
  return (
    <View>
      { (id.length > 0) && (
        <>
          <Text>name: {name}</Text>
          <Text>id: {id}</Text>
          <Image source={{uri:photo}} style={{width: 200, height: 200}}/>
        </>
      )}

      <Modal 
        visible={id.length == 0}
      >
        <SignInConect />
      </Modal>

      <Button title="Logout" onPress={handleLogout}/>
    </View>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    name: state.userReducer.givenName,
    id: state.userReducer.id,
    photo: state.userReducer.photo,
  }
}

const ProfileConect = connect(mapStateToProps, { resetUserData })(Profile);

export default ProfileConect;