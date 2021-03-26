import { IJob } from '../../models/IJob';

export const SET_JOB = 'SET_JOB';

// postProfile actions
export const setProfileUser = (data: IJob) => ({
  type: SET_JOB,
  data
});
