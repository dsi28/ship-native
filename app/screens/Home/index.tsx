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
  jobsList: any;
  // setJobState: (ownerJobs: any) => void;
}

const HomeScreenTab: React.FC<HomeInputProps> = ({
  jobType,
  jobsList
  // setJobState
}) => {
  // const [jobList, setJobList] = useState([]);
  // const ownerJobs = useSelector((state: AppState) => state.job.ownerJobs);
  console.log(jobType, jobsList);

  console.log('job list REAL TEST', jobsList);
  const pressItemHandler = (job: IJob) => {
    console.log('item pressed');
    NavigationService.navigate('Job', job);
  };
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        {typeof jobsList !== 'undefined' &&
        typeof jobsList !== 'string' &&
        // @ts-ignore
        jobsList.length > 0 ? (
          <View>
            <View>
              {
                // @ts-ignore
                jobsList.map((jobItem: any) => {
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
                })
              }
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
  const ownerJobs = useSelector((state: AppState) => state.job.ownerJobs);

  const [jobList, setJobList] = useState([]);

  const dispatch = useDispatch();

  const setOwnerJobsState = (ownerJobsList: any) => {
    dispatch(setOwnerJobs(ownerJobsList));
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
            jobType="ownerJobs"
            jobsList={ownerJobs}
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
            jobsList={jobList}
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
