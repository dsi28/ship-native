// modal for create user
export interface IUserProfile {
  uid: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: IBirthday;
  pictures?: string;
  isSignedUp: boolean;
  step?: number;
}

// modal for user within the app
export interface IUser {
  uid: string;
  email?: string;
  birthday?: IBirthday;
  isSignedUp: boolean;
  name?: string;
  phone?: string;
  pictures?: string;
}

export interface IBirthday {
  month?: string;
  day?: string;
  year?: string;
}
