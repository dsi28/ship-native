import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
import { setOwnerTravlerJobs } from '../../redux/actions/job';
import { AppState } from '../../redux/store/configureStore';
import { getUserOwnJob, getUserTravelerJobs } from '../../services/jobs';
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

  console.log(jobType, 'job list REAL TEST', jobsList);
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
                jobsList.map((job: any) => (
                  // @ts-ignore
                  // eslint-disable-next-line no-underscore-dangle
                  // const job = jobItem._data;
                  <ItemComponent
                    jobItem={job}
                    onPressHandler={pressItemHandler}
                    key={job.uid}
                  />
                ))
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
  // @ts-ignore
  const travelerJobs = useSelector((state: AppState) => state.job.travelerJobs);

  const dispatch = useDispatch();

  // const setOwnerJobsState = (ownerJobsList: any) => {
  //   dispatch(setOwnerJobs(ownerJobsList));
  // };
  // const setTravelerJobsState = (travelerJobsList: any) => {
  //   dispatch(setTravlerJobs(travelerJobsList));
  // };
  const getOwnerJobs = async () => {
    console.log(userId);
    const oJobs = await getUserOwnJob(userId);

    console.log('OWner JOOOOOOOOOOOOBs ', oJobs);
    const tJobs = await getUserTravelerJobs(userId);

    dispatch(
      setOwnerTravlerJobs({
        ownerJobs: oJobs,
        travelerJobs: tJobs
      })
    );
    // setOwnerJobsState(oJobs);
    // setTravelerJobsState(tJobs);
  };

  // const getTravelerJobs = async () => {
  //   console.log(userId);
  //   const tJobs = await getUserTravelerJobs(userId);
  //   // const cleanOwnerJobs = cleanFirebaseJobList(oJobs);

  //   console.log(' Travler jobs: ', tJobs);

  //   setTravelerJobsState(tJobs);
  // };

  useEffect(() => {
    getOwnerJobs();
    // getTravelerJobs();
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
            // jobType="ownerJobs"
            // jobsList={ownerJobs}
            jobType="travelerJobs"
            jobsList={travelerJobs}
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
