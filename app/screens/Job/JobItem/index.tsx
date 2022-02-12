import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
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
              <View style={styles.buttonContainer}>
                <WideButton
                  buttonText="View Traveler Requests"
                  onPressHandler={() => {
                    console.log('view traveler reqeuests');
                    NavigationService.navigate('Traveler Requests', job);
                  }}
                  isSelected
                  btnBackgoundColor="mediumvioletred"
                  btnTextColor="white"
                  btnBorderColor="mediumvioletred"
                />
              </View>
              <View style={styles.buttonContainer}>
                <WideButton
                  buttonText="Edit Job"
                  onPressHandler={() => console.log('edit job')}
                  isSelected
                  btnBackgoundColor="white"
                  btnTextColor="mediumvioletred"
                  btnBorderColor="mediumvioletred"
                />
              </View>
              <View>
                <WideButton
                  buttonText="Close Job"
                  onPressHandler={() => console.log('close job')}
                  isSelected
                  btnBackgoundColor="white"
                  btnTextColor="mediumvioletred"
                  btnBorderColor="mediumvioletred"
                />
              </View>
            </View>
          )}
          {!isOwner && (
            <View style={styles.buttonContainer}>
              <WideButton
                buttonText="Cancel Traveler Requests"
                onPressHandler={() => {
                  console.log('cancel traveler reqeuests');
                  // NavigationService.navigate('Traveler Requests', job);
                  cancelTravelerRequests(user.uid, job.uid);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
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
  console.log('v2: ', job);
  const [currentStep, setCurrentStep] = useState(job.currentStatus || 0);
  const [date, setDate] = useState('');

  const dispatch = useDispatch();

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
    setDate(getDate());
    console.log('XXXXXXXXXXXXXXXXXXXXxxxxx');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            currentStep={currentStep}
            stepNames={stepNames}
          />
        </View>
        <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
          <JobStatusComponent
            stepNames={stepNames}
            job={job}
            currentStep={currentStep}
          />
        </View>
        <View>
          <Pressable
            style={{ width: '100%' }}
            onPress={() => {
              const temp = currentStep.valueOf();
              // console.log('XYXYxyxy: ', {
              //   jobId: job.uid,
              //   currentStatus: job.currentStatus || 0 + 1,
              //   isOwner,
              //   jobs
              // });
              setCurrentStep(temp + 1);
              dispatch(
                setCurStepJobs({
                  jobId: job.uid,
                  currentStatus: temp + 1,
                  isOwner,
                  jobs
                })
              );
              updateJobStatus(job, temp + 1);
            }}
          >
            <Text style={{ color: 'orange' }}>press</Text>
          </Pressable>
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
  // console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTT', job);

  useEffect(() => {
    console.log('XXXXXXXXXXXXXXXXXXXXxxxxx JobItemScreenTabs');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#e91e63' },
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
