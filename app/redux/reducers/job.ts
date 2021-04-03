import { IJobState } from '../../models/IJob';
import { SET_NEW_JOB } from '../actions/job';

const initialState: IJobState = {
  newJob: {
    uid: '888', // will change when linked with auth
    itemName: '',
    // itemCategory: '',
    itemDeliveryLocation: '',
    itemValue: 0,
    itemImages: '',
    note: '',
    shipmentCost: 0
  },
  ownerJobs: []
};

interface IAction {
  data: IJobState;
  type: string;
}

const jobReducer = (state = initialState, action: IAction) => {
  console.log('JOB ACTION NOW', action);
  switch (action.type) {
    case SET_NEW_JOB:
      return {
        ...state,
        newJob: { ...action.data }
      };
    default:
      return state;
  }
};
export default jobReducer;
