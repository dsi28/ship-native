import dayjs from 'dayjs';
import React, { useState } from 'react';
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
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TravelerHeaderComponent
          name={traveler.name}
          review="4.5 (4)"
          image={traveler?.pictures}
        />
        <TravelerCDComponent />
        {typeof trip !== 'undefined' ? (
          <View>
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
              <JobPropertyComponent
                title="Flying to"
                value={trip.arrivalCity}
              />
              <JobPropertyComponent
                title="Flying From"
                value={trip?.departureCity}
              />
              <JobPropertyComponent
                title="Receive the item from the sender"
                value={`${traveler.receiveDate} days before the trip`}
              />
            </View>
          </View>
        ) : (
          <Text>No trip found </Text>
        )}

        <DarkBackgroundPropertyComponent
          title="Note from Traveler"
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
