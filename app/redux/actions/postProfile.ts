import { IUserProfile } from '../../models/IUserProfile';

export const SET_PROFILE_USER = 'SET_PROFILE_USER';
export const LOG_OUT_PROFILE_USER = 'LOG_OUT_PROFILE_USER';

// postProfile actions
export const setProfileUser = (data: IUserProfile) => ({
  type: SET_PROFILE_USER,
  data
});

export const logOutProfileUser = () => ({ type: LOG_OUT_PROFILE_USER });
