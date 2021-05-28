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

export const logoutUser = async () => {
  await auth().signOut();
  console.log('signed out user');
};

export const createUserEmailPassword = async (
  inputUser: any,
  pictureInput: string
) => {
  try {
    const userAuth = await auth().createUserWithEmailAndPassword(
      inputUser.email,
      inputUser.password
    );
    console.log('User account created & signed in!');
    console.log('auth user then2', inputUser);
    const userData = {
      ...inputUser,
      pictures: pictureInput,
      uid: userAuth.user?.uid,
      travelerRequests: [],
      ownerJobs: []
    };

    const { password, ...readyUserData } = userData;

    // // use uid to create user in firestore
    await usersRef.doc(userAuth.user?.uid).set(readyUserData);
    console.log('user added to firebase');
    return userData;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
    console.warn('ERROR creating user: ', error);
    return 'create user failed';
  }
};
