/* eslint-disable import/prefer-default-export */
import firestore, {
  FirebaseFirestoreTypes
} from '@react-native-firebase/firestore';
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

export const cleanFirebaseJobList = (
  jobList:
    | string
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
) => {
  if (typeof jobList !== 'string') {
    const cleanJobList = jobList.map((job: any) => {
      // eslint-disable-next-line no-underscore-dangle
      const cleanJob = job._data;
      console.log(cleanJob);
      return cleanJob;
    });
    return cleanJobList;
  }
  return jobList;
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
        const cleanJobs = cleanFirebaseJobList(firebaseJobs.docs);
        return cleanJobs;
      }
      return [];
    })
    .catch((error) => {
      console.warn('ERROR getting owner jobs: ', error);
      return 'get owner jobs failed';
    });
  return jobs;
};

export const getUserTravelerJobs = async (userId: string) => {
  // TODO make this more efficient
  const user = await usersRef
    // const jobs = await jobsRef
    .where('uid', '==', userId)
    .get()
    .then(async (firebaseUser) => {
      if (typeof firebaseUser !== 'undefined') {
        // use this to get jobs from jobs? firebaseJobs.docs[0]._data.travelerRequests
        console.log(
          ' XXXXXXXXXXXXfirebase jobs travler: ',
          // @ts-ignore
          // eslint-disable-next-line no-underscore-dangle
          firebaseUser.docs[0]._data.travelerRequests
        );
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        const tempTravelerReqs = firebaseUser.docs[0]._data.travelerRequests.map(
          (tReq: any) => tReq.jobId
        );
        ///

        const jobs = await jobsRef
          .where('uid', 'in', tempTravelerReqs)
          .get()
          .then((firebaseJobs) => {
            if (typeof firebaseJobs !== 'undefined') {
              const cleanJobs = cleanFirebaseJobList(firebaseJobs.docs);
              console.log(' YYYYYYYYYYYYYYYY: ', cleanJobs);
              return cleanJobs;
            }
            return [];
          })
          .catch((error) => {
            console.warn('ERROR getting traveler jobs: ', error);
            return 'get traveler jobs failed';
          });

        return jobs;
      }
      return [];
    })
    .catch((error) => {
      console.warn('ERROR getting traveler jobs: ', error);
      return 'get traveler jobs failed';
    });
  return user;
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

export const getFilterJobs = async (userId: string) => {
  const openJobs = await jobsRef
    .where('ownerId', '!=', userId)
    .where('itemSize', '==', 'medium')
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

export const jobTravelRequest = async (
  job: IJob,
  travelerId: string,
  tripId: string
) => {
  try {
    await jobsRef.doc(job.uid).update({
      travelerRequests: [
        // @ts-ignore
        ...job.travelerRequests,
        { travelerId, tripId, status: 'pending', jobId: job.uid }
      ]
    });
    await usersRef.doc(travelerId).update({
      travelerRequests: [
        ...job.travelerRequests,
        { travelerId, tripId, status: 'pending', jobId: job.uid }
      ]
    });
  } catch (error) {
    console.log('error sending traveler request: ', error);
  }
};

export const getTravelerRequests = async (travelerIds: string[]) => {
  console.log('get traveler requests');
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const travelers = travelerIds.map(async (trav: any) => {
      const traveler = await usersRef.where('uid', '==', trav.travelerId).get();
      return traveler;
    });

    const list = await Promise.all(travelers);
    console.log('LIIIIIIIIIST: ', list);
    const temp = list[0].docs.map((travler) => {
      console.log('list 2, ', travler);
      // @ts-ignore
      // eslint-disable-next-line no-underscore-dangle
      return travler._data;
    });
    return temp;
  } catch (error) {
    console.log('error getting traveler users: ', error);
    return [];
  }
};

export const cancelTravelerRequests = async (
  travelerId: string,
  jobId: string
) => {
  console.log('cancel traveler request ', travelerId, ' - ', jobId);
  try {
    // get traveler
    const traveler = await (await usersRef.doc(travelerId).get()).data();
    // @ts-ignore
    console.log('UUUUuuuuuuuuuUUU', traveler.travelerRequests);
    // @ts-ignore
    const newTravelerRequests = traveler.travelerRequests.map((tReq) => {
      if (tReq.jobId === jobId) {
        return { ...tReq, status: 'canceled' };
      }
      return tReq;
    });

    await usersRef
      .doc(travelerId)
      .update({
        travelerRequests: newTravelerRequests
      })
      .then(() => {
        console.log('User updated!');
      });

    /// /

    // get job
    const job = await (await jobsRef.doc(jobId).get()).data();
    // @ts-ignore
    console.log('UUUUuuuuuuuuuUUU2', job.travelerRequests);
    // @ts-ignore
    const newJobRequests = traveler.travelerRequests.map((jReq) => {
      if (jReq.travelerId === travelerId) {
        return { ...jReq, status: 'canceled' };
      }
      return jReq;
    });

    await jobsRef
      .doc(jobId)
      .update({
        travelerRequests: newJobRequests
      })
      .then(() => {
        console.log('job updated!');
      });

    /// /
    return [];
  } catch (error) {
    console.log('error getting traveler users: ', error);
    return [];
  }
};
