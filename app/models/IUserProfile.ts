import { ITravelerRequest } from './IJob';

// modal for create user
export interface IUserProfile {
  uid: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: IBirthday;
  pictures?: string;
  isSignedUp: boolean; // remove this
  step?: number;
}

// modal for user within the app
export interface IUser {
  uid: string;
  email?: string;
  birthday?: IBirthday;
  name?: string;
  phone?: string;
  pictures?: string;
  travelerRequests?: ITravelerRequest[];
  ownerJobs?: string[];
}

export interface IBirthday {
  month?: string;
  day?: string;
  year?: string;
}
