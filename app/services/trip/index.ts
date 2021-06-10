/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ITrip } from '../../models/ITraveler';
import { IUser } from '../../models/IUserProfile';

// const jobsRef = firestore().collection('Jobs');
const usersRef = firestore().collection('Users');

export const addTripFirebase = async (user: IUser, newTrip: ITrip) => {
  try {
    // // use uid to create user in firestore
    const uid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    const firebaseJob = await usersRef
      .doc(user.uid)
      .collection('trips')
      .doc(uid)
      .set({ ...newTrip, uid, userId: user.uid });
    return firebaseJob;
  } catch (error) {
    console.warn('ERROR adding trip: ', error);
    return 'add trip failed';
  }
};
