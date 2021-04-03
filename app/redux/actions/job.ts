import { INewJob } from '../../models/IJob';

export const SET_NEW_JOB = 'SET_NEW_JOB';

// postProfile actions
export const setNewJob = (data: INewJob) => ({
  type: SET_NEW_JOB,
  data
});
