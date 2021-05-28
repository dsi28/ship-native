/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../../models/IJob';

const jobsRef = firestore().collection('Jobs');

export const createJobFirebase = async (newJob: IJob) => {
  try {
    // // use uid to create user in firestore
    // const firebaseJob = await jobsRef.add(newJob);
    // jobsRef
    //   .add({
    //     name: 'Ada Lovelace',
    //     age: 30
    //   })
    //   .then((user) => {
    //     console.log('User added!', user);
    //   });
    const uid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    jobsRef.doc(uid).set({ uid, ...newJob });
    // console.log('job added to firebase: ', firebaseJob);
    // return firebaseJob;
    return newJob;
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
