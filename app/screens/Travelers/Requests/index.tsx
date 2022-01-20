import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TravelerRequestItemComponent from '../../../components/job/TravelerRequestItem';
import { ITrip } from '../../../models/ITraveler';
import { IUser } from '../../../models/IUserProfile';
import NavigationService from '../../../navigation/NavigationService';
import { getTravelerRequests } from '../../../services/jobs';
import styles from './styles';

interface TravelerRequestsProps {
  route: any;
}

const TravelerRequests: React.FC<TravelerRequestsProps> = ({ route }) => {
  const job = route.params;
  const [travelerList, setTravelerList] = useState<any>([]);

  const travlerAddTripJob = (tList: any, rList: any) => {
    const newTList = tList.map((traveler: any) => {
      let tripId = '';
      let receiveDate = 1;
      // eslint-disable-next-line consistent-return
      rList.forEach((request: any) => {
        if (traveler.uid === request.travelerId) {
          tripId = request.tripId;
          receiveDate = request.receiveDate;
        }
      });

      return { ...traveler, tripId, receiveDate };
    });
    return newTList;
    // traveler.currentRequest.tripId = trav.tripId;
    // @ts-ignore
    // traveler.currentRequest.jobId = trav.jobId;
  };

  const getTravelers = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const temp = await getTravelerRequests(job.travelerRequests);
    // @ts-ignore
    setTravelerList(travlerAddTripJob(temp, job.travelerRequests));
  };

  useEffect(() => {
    getTravelers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressItemHandler = (traveler: IUser, trip: ITrip | undefined) => {
    NavigationService.navigate('View Traveler', { traveler, job, trip });
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        {typeof travelerList !== 'undefined' && travelerList.length > 0 ? (
          <View>
            {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
            {travelerList.map((traveler: any) => {
              console.log('job here, ', traveler);
              return (
                <TravelerRequestItemComponent
                  onPressHandler={pressItemHandler}
                  traveler={traveler}
                  key={job.uid}
                  job={job}
                />
              );
            })}
          </View>
        ) : (
          <Text>No travelers found </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default TravelerRequests;
