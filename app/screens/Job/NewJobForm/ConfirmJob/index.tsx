import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../../components/buttons/WideButton';
import JobDetails from '../../../../components/job/Details';
import NavigationService from '../../../../navigation/NavigationService';
import { addJob, resetNewJob } from '../../../../redux/actions/job';
import { AppState } from '../../../../redux/store/configureStore';
import { createJobFirebase } from '../../../../services/jobs';
import styles from './styles';

const NewJobConfirm: React.FC = () => {
  const jobState = useSelector((state: AppState) => state.job.newJob);
  const user = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        {/* @ts-ignore */}
        <JobDetails job={jobState} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Post Job"
              onPressHandler={() => {
                console.warn('job posted: ', jobState);
                NavigationService.navigate('HomeScreen');
                const newJob = {
                  ...jobState,
                  ...{
                    travelerRequests: [],
                    ownerId: user.uid,
                    ownerName: user.name
                  }
                };

                // @ts-ignore
                dispatch(addJob(newJob));
                // update firebase job
                // @ts-ignore
                createJobFirebase(newJob, user);
              }}
              isSelected
              btnBackgoundColor="#87CEEB"
              btnBorderColor="#87CEEB"
              btnTextColor="white"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => {
                NavigationService.navigate('HomeScreen');
                dispatch(resetNewJob());
              }}
              isSelected
              btnBackgoundColor="white"
              btnBorderColor="#87CEEB"
              btnTextColor="#87CEEB"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default NewJobConfirm;
