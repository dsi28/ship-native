import { IJob, INewJob, POSSIBLE_STATUS } from '../../models/IJob';

export const SET_NEW_JOB = 'SET_NEW_JOB';
export const ADD_JOB = 'CREATE_NEW_JOB';
export const RESET_NEW_JOB = 'RESET_NEW_JOB';
export const LOG_OUT_JOB = 'LOG_OUT_JOB';
export const SET_OWNER_JOB = 'SET_OWNER_JOB';
export const SET_TRAVELER_JOB = 'SET_TRAVELER_JOB';
export const SET_OWNER_TRAVELER_JOB = 'SET_OWNER_TRAVELER_JOB';
export const ADD_TRAVELER_JOB = 'ADD_TRAVELER_JOB';

export const setNewJob = (data: INewJob) => ({
  type: SET_NEW_JOB,
  data
});

export const resetNewJob = () => ({
  type: RESET_NEW_JOB
});

export const addJob = (data: INewJob) => ({
  type: ADD_JOB,
  data
});

export const setOwnerJobs = (data: INewJob[]) => ({
  type: SET_OWNER_JOB,
  data
});

export const setTravlerJobs = (data: INewJob[]) => ({
  type: SET_TRAVELER_JOB,
  data
});

export const addTravelerJob = (data: INewJob) => ({
  type: ADD_TRAVELER_JOB,
  data
});

export const setOwnerTravlerJobs = (data: any) => ({
  type: SET_OWNER_TRAVELER_JOB,
  data
});

export const setCurStepJobs = (data: {
  jobId: string; // job uid
  currentStatus: number; // new status
  isOwner: boolean;
  jobs: IJob[]; // either travelerjobs state or owner jobs state
}) => {
  const index = data.jobs.findIndex((tJob: IJob) => tJob.uid === data.jobId);
  const tempJobs: IJob[] = [...data.jobs];
  tempJobs[index].currentStatus = data.currentStatus;
  // @ts-ignore
  tempJobs[index].status = POSSIBLE_STATUS[data.currentStatus];
  console.log('What ', tempJobs[index], 'the  ', data.currentStatus);

  if (data.isOwner) {
    console.log('is owner set cur job');
    return {
      type: SET_OWNER_JOB,
      data: tempJobs
    };
  }
  console.log('is not owner set cur job');
  return {
    type: SET_TRAVELER_JOB,
    data: tempJobs
  };
};

export const logOutJob = () => ({ type: LOG_OUT_JOB });
