export interface IJob {
  uid?: string; // from firebase TODO remove the ? when firebase is being used
  itemName?: string;
  itemCategory?:
    | 'category 1'
    | 'category 2'
    | 'category 3'
    | 'category 4'
    | 'category 5';
  itemDeliveryDate?: string; // TODO figure out if string is the best way
  itemDeliveryLocation?: string;
  itemValue?: number;
  itemImages?: string; // TODO only one image for now will add more images and make this a string array later.
  itemSize?: 'small' | 'medium' | 'large' | 'extra large';
  itemWeight?: IItemWeight;
  note?: string;
  itemReceiver?: IItemReciever;
  shipmentCost: number;
}
export interface IItemWeight {
  name:
    | 'Around 2 lbs'
    | 'Around 2-5 lbs'
    | 'Around 5-20 lbs'
    | 'Around 20-50 lbs';
  maxWeight: 2 | 5 | 20 | 50;
}

export interface IItemReciever {
  name: string;
  email: string;
}
