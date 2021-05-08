/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';
import { IJob } from '../../models/IJob';

const jobsRef = firestore().collection('Jobs');

export const createJob = async (newJob: IJob) => {
  try {
    // // use uid to create user in firestore
    const firebaseJob = await jobsRef.add(newJob);
    console.log('job added to firebase');
    return firebaseJob;
  } catch (error) {
    console.warn('ERROR creating job: ', error);
    return 'create user failed';
  }
};
