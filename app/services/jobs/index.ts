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
  const jobs = await jobsRef
    .where('ownerId', '==', userId)
    .get()
    .then((firebaseJobs) => {
      console.log(
        userId,
        ' firebase jobs: ',
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        firebaseJobs.docs[0]._data.itemName
      );
      return firebaseJobs.docs;
    })
    .catch((error) => {
      console.warn('ERROR creating job: ', error);
      return 'create user failed';
    });
  return jobs;
};

export const getOpenJobs = async (userId: string) => {
  const openJobs = await jobsRef
    .where('ownerId', '!=', userId)
    .get()
    .then((firebaseJobs) => {
      if (typeof firebaseJobs !== 'undefined') {
        console.log(
          userId,
          ' firebase jobs: ',
          // @ts-ignore
          // eslint-disable-next-line no-underscore-dangle
          firebaseJobs.docs[0]._data.itemName
        );
        return firebaseJobs.docs;
      }
      return [];
    })
    .catch((error) => {
      console.warn('ERROR creating job: ', error);
      return 'get open jobs failed';
    });
  return openJobs;
};
