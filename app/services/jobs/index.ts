/* eslint-disable import/prefer-default-export */
import firestore from '@react-native-firebase/firestore';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { IJob } from '../../models/IJob';
import { IUser } from '../../models/IUserProfile';

const jobsRef = firestore().collection('Jobs');
const usersRef = firestore().collection('Users');

export const createJobFirebase = async (newJob: IJob, user: IUser) => {
  try {
    // // use uid to create user in firestore
    const uid = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const firebaseJob = await jobsRef.add(newJob);
    const firebaseJob = await jobsRef.doc(uid).set({ ...newJob, uid });
    await usersRef.doc(newJob.ownerId).update({
      // @ts-ignore
      ownerJobs: [...user.ownerJobs, uid]
    });

    // console.log('job added to firebase: ', firebaseJob);
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
      if (typeof firebaseJobs !== 'undefined') {
        console.log(
          userId,
          ' firebase jobs: ',
          // @ts-ignore
          firebaseJobs.docs
        );
        return firebaseJobs.docs;
      }
      return [];
    })
    .catch((error) => {
      console.warn('ERROR getting owner jobs: ', error);
      return 'get owner jobs failed';
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
          firebaseJobs.docs
        );
        return firebaseJobs.docs;
      }
      return [];
    })
    .catch((error) => {
      console.warn('ERROR getting open jobs: ', error);
      return 'get open jobs failed';
    });
  return openJobs;
};

export const jobTravelRequest = async (job: IJob, travlerId: string) => {
  try {
    await jobsRef.doc(job.uid).update({
      // @ts-ignore
      travelerRequests: [...job.travelerRequests, travlerId]
    });
    await usersRef
      .doc(travlerId)
      .update({ travelerRequests: [...job.travelerRequests, job.uid] });
  } catch (error) {
    console.log('error sending traveler request: ', error);
  }
};
