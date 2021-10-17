import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerCDComponent from '../../../components/Traveler/ChatDistance';
import DarkBackgroundPropertyComponent from '../../../components/Traveler/DarkBackGroundProperty';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import NavigationService from '../../../navigation/NavigationService';
import { getTripFirebase } from '../../../services/trip';
import AcceptTravler from '../../Job/AcceptRequest';
import DeclineTravler from '../../Job/DeclineRequest';
import styles from './styles';

interface TravelerScreenProps {
  route: any;
}
const TravelerScreen: React.FC<TravelerScreenProps> = ({ route }) => {
  const traveler = route.params;
  // const job = route.params;
  const [trip, setTrip] = useState({});
  // @ts-ignore default does exsist not sure why this show up
  // const userProfile = useSelector((state: AppState) => state.default);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  // get the trip using the traveler.travelerRequests.tripId
  const getTravelerTrip = async () => {
    // eslint-disable-next-line no-underscore-dangle
    const temp = await getTripFirebase(
      traveler.uid,
      traveler.travelerRequests.tripId
    );
    // @ts-ignore
    setTrip(temp);
  };

  useEffect(() => {
    getTravelerTrip();
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
          <JobPropertyComponent title="Flying on" value="January 12, 2021" />
          <JobPropertyComponent title="Flying to" value="Florida, USA" />
          <JobPropertyComponent
            title="Address"
            value="167 NW 23rd St, Miami, FL 33127"
          />
          <JobPropertyComponent
            title="Receive the item from the sender prior"
            value="1 day before traveling"
          />
        </View>
        <DarkBackgroundPropertyComponent />
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
