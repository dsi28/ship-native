import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerCDComponent from '../../../components/Traveler/ChatDistance';
import DarkBackgroundPropertyComponent from '../../../components/Traveler/DarkBackGroundProperty';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import NavigationService from '../../../navigation/NavigationService';
import AcceptTravler from '../../Job/AcceptRequest';
import DeclineTravler from '../../Job/DeclineRequest';
import styles from './styles';

const TravelerScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  const [showDeclineModal, setShowDeclineModal] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TravelerHeaderComponent />
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
