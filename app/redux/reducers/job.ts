import { IJobState } from '../../models/IJob';
import {
  ADD_JOB,
  LOG_OUT_JOB,
  RESET_NEW_JOB,
  SET_NEW_JOB
} from '../actions/job';

const initialState: IJobState = {
  newJob: {
    itemName: '',
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
    case RESET_NEW_JOB:
      return {
        ...state,
        newJob: initialState.newJob
      };
    case ADD_JOB:
      return {
        ...state,
        newJob: initialState.newJob,
        ownerJobs: [...state.ownerJobs, action.data]
      };
    case LOG_OUT_JOB:
      return {
        newJob: initialState.newJob,
        ownerJobs: initialState.ownerJobs
      };
    default:
      return state;
  }
};
export default jobReducer;
