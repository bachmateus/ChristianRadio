import { GOOGLE_SIGNIN_CLIENT_ID } from '@env';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import User from '../../model/User';

GoogleSignin.configure({
  webClientId: GOOGLE_SIGNIN_CLIENT_ID,
});

export async function signIn() {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
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

  console.log(user)
  
  return user;
}

export async function signOut() {
  try {
    // await GoogleSignin.revokeAccess();
    await auth().signOut();
    return true;
  } catch (e) {
    return false;
    // throw new Error(e);
  }
}
