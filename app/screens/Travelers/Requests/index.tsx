import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TravelerRequestItemComponent from '../../../components/job/TravelerRequestItem';
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

  const getTravelers = async () => {
    console.log('get travelers', job.travelerRequests, ' end');
    // eslint-disable-next-line no-underscore-dangle
    const temp = await getTravelerRequests(job.travelerRequests);
    console.log('temp, ', temp);
    // @ts-ignore
    setTravelerList(temp);
  };

  useEffect(() => {
    getTravelers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressItemHandler = (traveler: IUser) => {
    console.log('item pressed');
    NavigationService.navigate('View Traveler', { traveler, job });
  };
  console.log('TList, ', travelerList);
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
