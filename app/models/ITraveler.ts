export interface ITrip {
  uid: string;
  userId: string;
  departureCity: string;
  arrivalCity: string;
  date?: Date;
  flightNumber: string;
  note: string;
}

export const travelerPlaceHolder = {
  uid: '',
  userId: '',
  departureCity: '',
  arrivalCity: '',
  flightNumber: '',
  note: ''
};
