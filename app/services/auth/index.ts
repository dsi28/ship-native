/* eslint-disable import/prefer-default-export */
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const usersRef = firestore().collection('Users');

// logs in user.
// if login successful get and return firestore user
export const loginWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    // firebase login code
    const loginUser = await auth().signInWithEmailAndPassword(email, password);

    // start
    if (loginUser) {
      try {
        // get user from firestore
        const loggedInUser = await (
          await usersRef.doc(loginUser.user?.uid).get()
        ).data();
        return loggedInUser;
      } catch (e) {
        // TODO:Log the User out
        return 'Unable to retrieve user details';
      }
    } else {
      return 'User required';
    }
    // end
  } catch (error) {
    console.log('login error: ', error);
    return 'login failed';
  }
};
