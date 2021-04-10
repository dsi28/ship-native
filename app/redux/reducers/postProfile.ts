import { IUserProfile } from '../../models/IUserProfile';
import { SET_PROFILE_USER } from '../actions/postProfile';

const initialState: IUserProfile = {
  uid: '123', // will change when linked with auth
  isSignedUp: false,
  name: '',
  email: '',
  password: '',
  phone: '',
  birthday: {
    month: '',
    day: '',
    year: ''
  },
  pictures: ''
};

interface IAction {
  data: IUserProfile;
  type: string;
}

const userProfile = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case SET_PROFILE_USER:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
export default userProfile;
