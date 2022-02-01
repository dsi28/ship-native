export interface IJobState {
  newJob: INewJob;
  ownerJobs: [];
  travelerJobs: [];
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
  itemPickupLocation?: string;
  itemValue?: number;
  itemImages?: string; // TODO only one image for now will add more images and make this a string array later.
  itemSize?: 'small' | 'medium' | 'large' | 'extra large';
  itemLength?: number;
  itemWidth?: number;
  itemHeight?: number;
  itemWeight?: number;
  note?: string;
  itemReceiver?: IItemReciever;
  shipmentCost?: number;
  traveler?: string;
  ownerId?: string; // uid
  ownerName?: string;
  status?: IJobStatus[];
  travelerRequests?: ITravelerRequest[];
  uid: string;
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
  itemPickupLocation?: string;
  itemValue?: number;
  itemImages?: string; // TODO only one image for now will add more images and make this a string array later.
  itemLength?: number;
  itemWidth?: number;
  itemHeight?: number;
  itemWeight?: number;
  status?: IJobStatus[];
  note?: string;
  itemReceiver?: IItemReciever;
  shipmentCost?: number;
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
  tripId: string;
  status: 'accepted' | 'denied' | 'pending';
  jobId: string;
}

export interface IJobStatus {
  title:
    | 'Searching for traveler'
    | 'Item shipped to traveler'
    | 'Item confirmed by traveler'
    | 'Traveler is on their way'
    | 'Traveler delivered the item'
    | 'Receiver collected the item'
    | 'Item confirmed by receiver'
    | 'Payment is sent';
  done: boolean;
  current: boolean;
}
