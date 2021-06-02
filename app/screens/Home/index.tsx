import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
import { setOwnerJobs } from '../../redux/actions/job';
import { AppState } from '../../redux/store/configureStore';
import { getUserOwnJob } from '../../services/jobs';
import AcceptTravler from '../Job/AcceptRequest';
import DeclineTravler from '../Job/DeclineRequest';
import JobItem from '../Job/JobItem';
import NewJobForm from '../Job/NewJobForm';
import ProfileReviews from '../Profile/Reviews';
import TravelerRequests from '../Travelers/Requests';
import TravelerScreen from '../Travelers/TravelerScreen';
import styles from './styles';

interface HomeInputProps {
  jobType: string;
  getJobs: any;
  // setJobState: (ownerJobs: any) => void;
}

const HomeScreenTab: React.FC<HomeInputProps> = ({
  jobType,
  getJobs
  // setJobState
}) => {
  const [jobList, setJobList] = useState([]);

  // const cleanJobsFS = (
  //   jobs:
  //     | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
  //     | 'failed to get jobs'
  // ) => {
  //   // @ts-ignore
  //   const cleanJobs = jobs.map((job) => {
  //     // eslint-disable-next-line no-underscore-dangle
  //     const baseJob = job._data;
  //     return {
  //       itemName: baseJob.itemName,
  //       itemCategory: baseJob.itemName,
  //       itemDeliveryDate: baseJob.itemDeliveryDate,
  //       itemDeliveryLocation: baseJob.itemDeliveryLocation,
  //       itemValue: baseJob.itemValue,
  //       itemImages: baseJob.itemImages,
  //       itemSize: baseJob.itemName,
  //       itemWeight: baseJob.itemWeight,
  //       note: baseJob.note,
  //       itemReceiver: baseJob.itemReceiver,
  //       shipmentCost: baseJob.shipmentCost,
  //       traveler: baseJob.traveler,
  //       ownerName: baseJob.ownerName,
  //       ownerId: baseJob.ownerId,
  //       status: baseJob.status,
  //       travelerRequests: baseJob.travelerRequests
  //     };
  //   });
  //   return cleanJobs;
  // };

  useEffect(() => {
    console.log('component did mount:', jobType);
    console.log('jobs owner list, ', getJobs);
    setJobList(getJobs);
    // getJobs().then((jobs) => {
    //   console.log('jobs', jobs);
    //   const cleanJobs = cleanJobsFS(jobs);
    //   // @ts-ignore
    //   setJobList(cleanJobs);
    //   // setJobState(cleanJobs);
    //   // return jobs;
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('job list REAL TEST', jobList);
  const pressItemHandler = (job: IJob) => {
    console.log('item pressed');
    NavigationService.navigate('Job', job);
  };
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        {typeof jobList !== 'undefined' &&
        typeof jobList !== 'string' &&
        jobList.length > 0 ? (
          <View>
            <View>
              {jobList.map((jobItem: any) => {
                // @ts-ignore
                // eslint-disable-next-line no-underscore-dangle
                const job = jobItem._data;
                return (
                  <ItemComponent
                    jobItem={job}
                    onPressHandler={pressItemHandler}
                    key={job.uid}
                  />
                );
              })}
            </View>
          </View>
        ) : (
          <Text>No jobs found </Text>
        )}
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  const userId = useSelector((state: AppState) => state.user.uid);
  const [jobList, setJobList] = useState([]);

  const dispatch = useDispatch();

  const setOwnerJobsState = (ownerJobs: any) => {
    dispatch(setOwnerJobs(ownerJobs));
  };

  const getJobs = async () => {
    console.log(userId);
    const jobs = await getUserOwnJob(userId);
    console.log('OWner JOOOOOOOOOOOOBs ', jobs);
    // @ts-ignore
    setJobList(jobs);
    setOwnerJobsState(jobs);
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log('job state', jobState.ownerJobs, 'FULL');
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
      <Tab.Screen name="Sender" options={{ tabBarLabel: 'Sender' }}>
        {() => (
          // @ts-ignore
          <HomeScreenTab
            // jobList={jobState.ownerJobs}
            jobType="Owner"
            getJobs={jobList}
            // setJobState={setOwnerJobsState}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Traveler" options={{ tabBarLabel: 'Traveler' }}>
        {() => (
          // @ts-ignore
          <HomeScreenTab
            // jobList={jobState.ownerJobs}
            jobType="Owner"
            getJobs={jobList}
            // setJobState={setOwnerJobsState}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      options={{ headerShown: false }}
      component={HomeScreenTabs}
    />
    <Stack.Screen name="Job" component={JobItem} />
    <Stack.Screen name="Traveler Requests" component={TravelerRequests} />
    <Stack.Screen name="View Traveler" component={TravelerScreen} />
    <Stack.Screen name="Traveler Reviews" component={ProfileReviews} />
    <Stack.Screen name="Accept Traveler" component={AcceptTravler} />
    <Stack.Screen name="Decline Traveler" component={DeclineTravler} />
    <Stack.Screen
      name="New Job"
      component={NewJobForm}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default HomeStack;
