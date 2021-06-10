import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TravelerRequestItemComponent from '../../../components/job/TravelerRequestItem';
import NavigationService from '../../../navigation/NavigationService';
import { getTravelerRequests } from '../../../services/jobs';
import TravelerScreen from '../TravelerScreen';
import styles from './styles';

interface TravelerRequestsProps {
  route: any;
}

const TravelerRequests: React.FC<TravelerRequestsProps> = ({ route }) => {
  const job = route.params;
  const [travelerList, setTravelerList] = useState<any>([]);

  const getTravelers = async () => {
    console.log('get travelers');
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

  const pressItemHandler = () => {
    console.log('item pressed');
    NavigationService.navigate('View Traveler', TravelerScreen);
  };
  console.log('TList, ', travelerList);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        {typeof travelerList !== 'undefined' ? (
          <View>
            {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
            {travelerList.map((job: any) => {
              console.log('job here, ', job);
              return (
                <TravelerRequestItemComponent
                  onPressHandler={pressItemHandler}
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
