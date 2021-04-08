export interface IUserProfile {
  uid: string; // from auth???
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: IBirthday;
  pictures?: string;
  isSignedUp: boolean;
  step?: number;
}
export interface IBirthday {
  month?: string;
  day?: string;
  year?: string;
}
