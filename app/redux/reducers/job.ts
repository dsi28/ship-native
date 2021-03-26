import { IJob } from '../../models/IJob';
import { SET_JOB } from '../actions/job';

const initialState: IJob = {
  uid: '123', // will change when linked with auth
  itemName: '',
  // itemCategory: '',
  itemDeliveryDate: {
    month: '',
    day: '',
    year: ''
  },
  itemDeliveryLocation: '',
  itemValue: 0,
  itemImages: '',
  note: '',
  shipmentCost: 0
};

interface IAction {
  data: IJob;
  type: string;
}

const userProfile = (state = initialState, action: IAction) => {
  console.log('ACTION NOW', action);
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
};
export default userProfile;
