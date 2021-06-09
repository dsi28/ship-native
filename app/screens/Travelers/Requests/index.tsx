import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TravelerRequestItemComponent from '../../../components/job/TravelerRequestItem';
import NavigationService from '../../../navigation/NavigationService';
import TravelerScreen from '../TravelerScreen';
import styles from './styles';

interface TravelerRequestsProps {
  route: any;
}

const TravelerRequests: React.FC<TravelerRequestsProps> = ({ route }) => {
  const job = route.params;

  const getTravelers = () => {
    console.log('get travelers');
    job.travelerRequests.map((traveler: any) => {
      console.log('travelerid here, ', traveler);
      return [];
      // getTravelerRequests();
    });
  };

  useEffect(() => {
    getTravelers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressItemHandler = () => {
    console.log('item pressed');
    NavigationService.navigate('View Traveler', TravelerScreen);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        {typeof job !== 'undefined' ? (
          <View>
            <Text>Traveler Requests</Text>
            <View>
              {job.travelerRequests.map((traveler: any) => {
                console.log('travelerid here, ', traveler);
                return <Text>traveler :{traveler}</Text>;
              })}
            </View>
          </View>
        ) : (
          <Text>No travelers found </Text>
        )}

        <TravelerRequestItemComponent onPressHandler={pressItemHandler} />
        <TravelerRequestItemComponent onPressHandler={pressItemHandler} />
      </View>
    </ScrollView>
  );
};

export default TravelerRequests;
