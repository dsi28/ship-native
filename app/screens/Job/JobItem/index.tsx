import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import NavigationService from '../../../navigation/NavigationService';
import TravelerRequests from '../../Travelers/Requests';
import styles from './styles';

interface JobItemProps {
  route: any;
}

const JobItem: React.FC<JobItemProps> = ({ route }) => {
  const job = route.params;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <JobDetails job={job} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="View Traveler Requests"
              onPressHandler={() => {
                console.log('view traveler reqeuests');
                NavigationService.navigate(
                  'Traveler Requests',
                  TravelerRequests
                );
              }}
              isSelected
              btnBackgoundColor="orange"
              btnTextColor="white"
              btnBorderColor="orange"
            />
          </View>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Edit Job"
              onPressHandler={() => console.log('edit job')}
              isSelected
              btnBackgoundColor="bisque"
              btnTextColor="orange"
              btnBorderColor="orange"
            />
          </View>
          <View>
            <WideButton
              buttonText="Close Job"
              onPressHandler={() => console.log('close job')}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="orange"
              btnBorderColor="orange"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default JobItem;
