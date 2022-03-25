import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import User from '../../model/User';

const { GOOGLE_SIGNIN_CLIENT_ID } = process.env

GoogleSignin.configure({
  webClientId: GOOGLE_SIGNIN_CLIENT_ID,
});

export async function signIn() {
  try {
    const resp = await GoogleSignin.signIn();
    console.log(resp)
    return
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    console.log(googleCredential)

    const userData: FirebaseAuthTypes.UserCredential = await auth().signInWithCredential(googleCredential);
    const user = new User();
    
    Object.assign(user, {
      id: userData.user.uid,
      email: userData.user.email,
      givenName: userData.additionalUserInfo.profile.given_name,
      fullName: userData.user.displayName,
      photo: userData.user.photoURL,
      providerId: userData.additionalUserInfo.providerId
    });
    
    return user;
  } catch(e) {
    console.log(e)
  }
}

export async function signOut() {
  try {
    await auth().signOut();
    return true;
  } catch (e) {
    throw new Error(e);
  }
}