import { IJob } from '../../models/IJob';
import { SET_JOB } from '../actions/job';

const initialState: IJob = {
  newJob: {
    uid: '888', // will change when linked with auth
    itemName: '',
    // itemCategory: '',
    itemDeliveryLocation: '',
    itemValue: 0,
    itemImages: '',
    note: '',
    shipmentCost: 0
  }
};

interface IAction {
  data: IJob;
  type: string;
}

const jobReducer = (state = initialState, action: IAction) => {
  console.log('JOB ACTION NOW', action);
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
export default jobReducer;
