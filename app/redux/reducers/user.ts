import { IUser } from '../../models/IUserProfile';
import { LOG_OFF_USER, NEW_USER, SET_USER } from '../actions/user';

const initialState: IUser = {
  uid: '',
  name: '',
  email: '',
  phone: '',
  birthday: {
    month: '',
    day: '',
    year: ''
  },
  pictures: ''
};

interface IAction {
  data: IUser;
  type: string;
}

const user = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.data
      };
    case NEW_USER:
      return {
        ...action.data
      };
    case LOG_OFF_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
};
export default user;
