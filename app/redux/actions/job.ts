import { INewJob } from '../../models/IJob';

export const SET_NEW_JOB = 'SET_NEW_JOB';
export const ADD_JOB = 'CREATE_NEW_JOB';
export const RESET_NEW_JOB = 'RESET_NEW_JOB';
export const LOG_OUT_JOB = 'LOG_OUT_JOB';
export const SET_OWNER_JOB = 'SET_OWNER_JOB';
export const SET_TRAVELER_JOB = 'SET_OWNER_JOB';

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

export const logOutJob = () => ({ type: LOG_OUT_JOB });
