import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerCDComponent from '../../../components/Traveler/ChatDistance';
import DarkBackgroundPropertyComponent from '../../../components/Traveler/DarkBackGroundProperty';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import NavigationService from '../../../navigation/NavigationService';
import AcceptTravler from '../../Job/AcceptRequest';
import DeclineTravler from '../../Job/DeclineRequest';
import styles from './styles';

interface TravelerScreenProps {
  route: any;
}
const TravelerScreen: React.FC<TravelerScreenProps> = ({ route }) => {
  const { trip, traveler } = route.params;
  console.log(trip);
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.default);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  // // get the trip using the traveler.travelerRequests.tripId
  // const getTravelerTrip = async () => {
  //   // eslint-disable-next-line no-underscore-dangle
  //   const temp = await getTripFirebase(
  //     traveler.uid,
  //     traveler.travelerRequests.tripId
  //   );
  //   console.error(
  //     'test this get traveler trip was called in appscreensTravelersTravelerScreenindex.tsx'
  //   );
  //   // @ts-ignore
  //   setTrip(temp);
  // };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TravelerHeaderComponent />
        {typeof trip !== 'undefined' ? (
          <View>
            {/* @ts-ignore */}
            <Text>{trip.arrivalCity}</Text>
          </View>
        ) : (
          <Text>No trip found </Text>
        )}
        <TravelerCDComponent />
        <View style={styles.travelerContainer}>
          <JobPropertyComponent
            title="Flying on"
            value={
              // @ts-ignore
              // eslint-disable-next-line eqeqeq
              typeof trip.date.seconds == 'number'
                ? dayjs
                    // @ts-ignore
                    .unix(trip.date.seconds)
                    .format('MMMM DD, YYYY')
                : dayjs(
                    // @ts-ignore
                    trip.date
                  ).format('MMMM DD, YYYY')
            }
          />
          <JobPropertyComponent title="Flying to" value={trip.arrivalCity} />
          <JobPropertyComponent
            title="Flying From"
            value={trip?.departureCity}
          />
          <JobPropertyComponent
            title="Receive the item from the sender"
            value={`${traveler.receiveDate} days before the trip`}
          />
        </View>
        <DarkBackgroundPropertyComponent
          title="About Travler"
          value={trip.note}
        />
        <View style={styles.travelerContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Accept Request"
              onPressHandler={() => {
                console.log('Accept Request');
                NavigationService.navigate('Accept Traveler', AcceptTravler);
              }}
              isSelected
              btnBackgoundColor="mediumvioletred"
              btnTextColor="white"
              btnBorderColor="mediumvioletred"
            />
          </View>
          <View style={styles.bottomButtonContainer}>
            <WideButton
              buttonText="Decline"
              onPressHandler={() => {
                console.log('decline traveler');
                setShowDeclineModal(true);
                // NavigationService.navigate('Decline Traveler', DeclineTravler);
              }}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="mediumvioletred"
              btnBorderColor="mediumvioletred"
            />
          </View>
        </View>
      </View>
      <DeclineTravler
        showModal={showDeclineModal}
        setShowModal={setShowDeclineModal}
      />
    </ScrollView>
  );
};

export default TravelerScreen;
