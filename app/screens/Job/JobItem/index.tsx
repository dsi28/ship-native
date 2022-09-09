import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobStatusComponent from '../../../components/job/status/index';
import JobTravelerDetails from '../../../components/job/TravelerDetails';
import VerticalStepIndicator from '../../../components/stepIndicator/index';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import { setCurStepJobs } from '../../../redux/actions/job';
import { AppState } from '../../../redux/store/configureStore';
import {
  cancelTravelerRequests,
  updateJobStatus
} from '../../../services/jobs';
import styles from './styles';

const stepNames = {
  data: [
    {
      title: 'Searching for traveler'
    },
    {
      title: 'Item shipped to traveler'
    },
    {
      title: 'Item confirmed by traveler'
    },
    {
      title: 'Traveler is on their way'
    },
    {
      title: 'Traveler delivered the item'
    },
    {
      title: 'Receiver collected the item'
    },
    {
      title: 'Item confirmed by receiver'
    },
    {
      title: 'Payment is made'
    }
  ]
};

interface JobItemProps {
  // route: any;
  job: IJob;
  isOwner: boolean;
}

const JobItem: React.FC<JobItemProps> = ({ job, isOwner }) => {
  const user = useSelector((state: AppState) => state.user);
  console.log('XXXXXXX', isOwner, ' vvvv: ', job);
  return (
    // const job = route.params;
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        {isOwner && <JobDetails job={job} />}
        {!isOwner && <JobTravelerDetails job={job} />}

        <View style={styles.buttonsContainer}>
          {isOwner && (
            <View>
              {/* <View style={styles.buttonContainer}>
                <WideButton
                  buttonText="Edit Job"
                  onPressHandler={() => console.log('edit job')}
                  isSelected
                  btnBackgoundColor="#87CEEB"
                  btnTextColor="white"
                  btnBorderColor="#87CEEB"
                />
              </View> */}
              {/* <View>
                <WideButton
                  buttonText="Close Job"
                  onPressHandler={() => console.log('close job')}
                  isSelected
                  btnBackgoundColor="white"
                  btnTextColor="#FFC100"
                  btnBorderColor="#FFC100"
                />
              </View> */}
            </View>
          )}
          {!isOwner && (
            <View style={styles.buttonContainer}>
              <WideButton
                buttonText="Cancel Traveler Request"
                onPressHandler={() => {
                  console.log('cancel traveler reqeuests');
                  // NavigationService.navigate('Traveler Requests', job);
                  cancelTravelerRequests(user.uid, job.uid);
                }}
                isSelected
                btnBackgoundColor="#FFC100"
                btnTextColor="white"
                btnBorderColor="#FFC100"
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

/// /new 2

interface TrackJobProps {
  // route: any;
  job: IJob;
  jobs: IJob[];
  isOwner: boolean;
}

const TrackJob: React.FC<TrackJobProps> = ({ job, jobs, isOwner }) => {
  console.log('v22222222222: ', job);
  const [currentStep, setCurrentStep] = useState(job.currentStatus);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const getDate = (): string => {
    if (job?.itemDeliveryDate !== undefined) {
      if (
        typeof job?.itemDeliveryDate === 'object' &&
        // @ts-ignore
        typeof job?.itemDeliveryDate.toDate !== 'undefined'
      ) {
        return (
          job?.itemDeliveryDate
            // @ts-ignore
            .toDate()
            .toDateString()
            .toString()
        );
      }
      return new Date(
        // @ts-ignore
        job?.itemDeliveryDate
      )
        .toDateString()
        .toString();
    }
    return 'No date set';
  };

  useEffect(() => {
    if (isFocused) {
      console.log('called');
      setCurrentStep(job.currentStatus);
    }
  }, [isFocused, job.currentStatus]);

  useEffect(() => {
    console.log('2XXXXXXXXXXXXXXXXXXXXxxxxx');
    setDate(getDate());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStep = (newStep: number) => {
    setCurrentStep(newStep);

    // update job status - sets job currentStatus
    updateJobStatus(job, newStep);

    // update job state - curStatus, status, travelerRequests[].status
    dispatch(
      setCurStepJobs({
        jobId: job.uid,
        currentStatus: newStep,
        isOwner,
        // @ts-ignore
        jobs
      })
    );

    console.log('Success', 'Your order is confirmed!', job.currentStatus);

    NavigationService.navigate('Job');
  };

  return (
    // const job = route.params;
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 17 }}>Expected item delivery date</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{date}</Text>
          </View>
        </View>
        <View>
          <VerticalStepIndicator
            // @ts-ignore
            currentStep={currentStep}
            stepNames={stepNames}
          />
        </View>
        <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
          <JobStatusComponent
            stepNames={stepNames}
            job={job}
            isOwner={isOwner}
            // @ts-ignore
            currentStep={currentStep}
            updateStep={updateStep}
          />
        </View>
      </View>
    </ScrollView>
  );
};

/// /////new

const Tab = createMaterialTopTabNavigator();

function JobItemScreenTabs({ route }: any) {
  const { job } = route.params;
  const { isOwner } = route.params;
  const { jobsList } = route.params;
  console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTT', job);

  useEffect(() => {
    console.log('XXXXXXXXXXXXXXXXXXXXxxxxx JobItemScreenTabs');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#87CEEB',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#87CEEB' },
        style: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen name="Details" options={{ tabBarLabel: 'Item Details' }}>
        {() => <JobItem job={job} isOwner={isOwner} />}
      </Tab.Screen>
      <Tab.Screen name="Track" options={{ tabBarLabel: 'Track Item' }}>
        {() => <TrackJob job={job} jobs={jobsList} isOwner={isOwner} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

/// end new
export default JobItemScreenTabs;
