/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';
import { IJob } from '../../models/IJob';

const jobsRef = firestore().collection('Jobs');

export const createJobFirebase = async (newJob: IJob) => {
  try {
    // // use uid to create user in firestore
    const firebaseJob = await jobsRef.add(newJob);
    console.log('job added to firebase: ', newJob);
    return firebaseJob;
  } catch (error) {
    console.warn('ERROR creating job: ', error);
    return 'create user failed';
  }
};

export const getUserOwnJob = async (userId: string) => {
  try {
    const firebaseJobs = await jobsRef.where('owner', '==', userId).get();
    console.log(userId, ' firebase jobs: ', firebaseJobs);
    return firebaseJobs;
  } catch (error) {
    console.warn('ERROR creating job: ', error);
    return 'create user failed';
  }
};
