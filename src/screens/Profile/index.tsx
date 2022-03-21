import { FC } from "react"
import { Button, Image, Modal, Text, View } from "react-native";
import { connect } from "react-redux";

import SignInConect from "../../components/SignIn";
import { AppReducerTypes } from "../../reducers/types";
import { resetUserData } from "../../reducers/userReducer/actions";

interface Props {
  name:string
  token:string
  photo:string
  resetUserData:Function
}

const Profile:FC<Props> = ({name, token, photo, resetUserData}) => {
  const handleLogout = () => {
    resetUserData()
  }

  return (
    <View>
      { (token.length > 0) && (
        <>
          <Text>name: {name}</Text>
          <Text>token: {token}</Text>
          <Image source={{uri:photo}} style={{width: 200, height: 200}}/>
        </>
      )}

      <Modal 
        visible={token.length === 0}
      >
        <SignInConect />
      </Modal>

      <Button title="Logout" onPress={handleLogout}/>
    </View>
  )
}

const mapStateToProps = (state: AppReducerTypes) => {
  return {
    name: state.userReducer.name,
    token: state.userReducer.token,
    photo: state.userReducer.photo,
  }
}

const ProfileConect = connect(mapStateToProps, { resetUserData })(Profile);

export default ProfileConect;