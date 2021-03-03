import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import TravelerCDComponent from '../../../components/Traveler/ChatDistance';
import DarkBackgroundPropertyComponent from '../../../components/Traveler/DarkBackGroundProperty';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import styles from './styles';

const TravelerScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);

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
              onPressHandler={() => console.log('Accept Request')}
              isSelected
              btnBackgoundColor="orange"
              btnTextColor="white"
              btnBorderColor="orange"
            />
          </View>
          <View style={styles.bottomButtonContainer}>
            <WideButton
              buttonText="Decline"
              onPressHandler={() => console.log('Decline Request')}
              isSelected
              btnBackgoundColor="bisque"
              btnTextColor="orange"
              btnBorderColor="orange"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelerScreen;
