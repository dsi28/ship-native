import dayjs from 'dayjs';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobPropertyComponent from '../../../components/job/property';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

NavigationService.navigate('Traveler Requests');

interface AcceptTravelerProps {
  route: any;
}

const AcceptTravler: React.FC<AcceptTravelerProps> = ({ route }) => {
  const { job, traveler, trip } = route.params;

  return (
    // @ts-ignore default does exsist not sure why this show up
    // const userProfile = useSelector((state: AppState) => state.default);
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.travlerContainer}>
            <TravelerHeaderComponent
              name={traveler.name}
              review="4.5 (4)"
              image={traveler?.pictures}
            />
          </View>

          <View>
            <JobPropertyComponent
              title="Flying on"
              value={
                typeof trip.date?.seconds === 'number'
                  ? dayjs
                      // @ts-ignore
                      .unix(trip.date?.seconds)
                      .format('MMMM DD, YYYY')
                  : dayjs(
                      // @ts-ignore
                      trip.date
                    ).format('MMMM DD YYYY')
              }
            />
            <JobPropertyComponent title="Flying to" value={trip.arrivalCity} />
          </View>
        </View>
        <View style={styles.jobDetailsContainer}>
          <JobDetails job={job} />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Payment"
              onPressHandler={() => {
                console.log('Payment');
                // add stripe services call

                NavigationService.navigate('Job');
              }}
              isSelected
              btnBackgoundColor="mediumvioletred"
              btnTextColor="white"
              btnBorderColor="mediumvioletred"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => {
                console.log('cancel');
                NavigationService.navigate('Traveler Requests');
              }}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="mediumvioletred"
              btnBorderColor="mediumvioletred"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default AcceptTravler;
