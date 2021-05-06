import { IUser } from '../../models/IUserProfile';

export const NEW_USER = 'NEW_USER';
export const SET_USER = 'SET_USER';
export const LOG_OFF_USER = 'LOG_OFF_USER';

export const newUser = (data: IUser) => ({
  type: NEW_USER,
  data
});

export const setUser = (data: IUser) => ({
  type: SET_USER,
  data
});

export const logOffUser = () => ({
  type: LOG_OFF_USER
});
