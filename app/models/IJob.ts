export interface IJobState {
  newJob: INewJob;
  ownerJobs: [];
  // add traveler jobs
  // saved jobs?
}

export interface IJob {
  itemName?: string;
  itemCategory?:
    | 'category 1'
    | 'category 2'
    | 'category 3'
    | 'category 4'
    | 'category 5';
  itemDeliveryDate?: Date;
  itemDeliveryLocation?: string;
  itemValue?: number;
  itemImages?: string; // TODO only one image for now will add more images and make this a string array later.
  itemSize?: 'small' | 'medium' | 'large' | 'extra large';
  itemWeight?: IItemWeight;
  note?: string;
  itemReceiver?: IItemReciever;
  shipmentCost?: number;
  traveler?: string;
  owner?: string; // uid
  status?: 'needs traveler' | 'in progress' | 'complete' | 'canceled';
  travelerRequests?: ITravelerRequest[];
}

export interface INewJob {
  uid?: string; // from firebase TODO remove the ? when firebase is being used
  itemName?: string;
  itemCategory?:
    | 'category 1'
    | 'category 2'
    | 'category 3'
    | 'category 4'
    | 'category 5';
  itemDeliveryDate?: Date; // TODO figure out if string is the best way
  itemDeliveryLocation?: string;
  itemValue?: number;
  itemImages?: string; // TODO only one image for now will add more images and make this a string array later.
  itemSize?: 'small' | 'medium' | 'large' | 'extra large';
  itemWeight?: IItemWeight;
  note?: string;
  itemReceiver?: IItemReciever;
  shipmentCost?: number;
}
export interface IItemWeight {
  weight:
    | { max: 2; text: 'Around 2 lbs' }
    | { max: 5; text: 'Around 2-5 lbs' }
    | { max: 20; text: 'Around 5-20 lbs' }
    | { max: 50; text: 'Around 20-50 lbs' }
    | { max: 1000; text: 'Over 50 lbs' };
}

export interface IItemReciever {
  name: string;
  email: string;
}

export interface IDate {
  month?: string;
  day?: string;
  year?: string;
}

export interface IItemCategory {
  category:
    | 'category 1'
    | 'category 2'
    | 'category 3'
    | 'category 4'
    | 'category 5';
}

export interface ITravelerRequest {
  travelerId: string;
  status: 'accepted' | 'denied' | 'pending';
}
