export interface IUserProfile {
  uid: string; // from auth???
  name?: string;
  birthday?: IBirthday;
  gender?: IGender | '';
  role?: 'seller' | 'user' | '';
  showMe?: 'woman' | 'man' | 'everyone' | '';
  pictures?: string[];
  done: boolean;
  step?: number;
}

export interface IGender {
  gender: 'woman' | 'man' | 'other'; // if other will have other property where user can select?
  other?: string;
}

export interface IBirthday {
  month?: string;
  day?: string;
  year?: string;
}
