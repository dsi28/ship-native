import { INewJob } from '../../models/IJob';

export const SET_JOB = 'SET_JOB';

// postProfile actions
export const setJob = (data: INewJob) => ({
  type: SET_JOB,
  data
});
