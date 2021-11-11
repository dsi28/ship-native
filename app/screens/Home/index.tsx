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
import JobItemScreenTabs from '../Job/JobItem';
import NewJobForm from '../Job/NewJobForm';
import ProfileReviews from '../Profile/Reviews';
import TravelerRequests from '../Travelers/Requests';
import TravelerScreen from '../Travelers/TravelerScreen';
import NewTrip from '../Travelers/Trip';
import styles from './styles';

interface HomeInputProps {
  jobType: string;
  jobsList: any;
  isOwner: boolean;
  // setJobState: (ownerJobs: any) => void;
}

const HomeScreenTab: React.FC<HomeInputProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  jobType,
  jobsList,
  isOwner
  // setJobState
}) => {
  // const [jobList, setJobList] = useState([]);
  // const ownerJobs = useSelector((state: AppState) => state.job.ownerJobs);
  const pressItemHandler = (job: IJob) => {
    const temp = { job, isOwner };
    NavigationService.navigate('Job', temp);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {typeof jobsList !== 'undefined' &&
        typeof jobsList !== 'string' &&
        // @ts-ignore
        jobsList.length > 0 ? (
          <View>
            <View>
              {
                // @ts-ignore
                jobsList.map((job: any, i: number) => (
                  // @ts-ignore
                  // eslint-disable-next-line no-underscore-dangle
                  // const job = jobItem._data;
                  <ItemComponent
                    jobItem={job}
                    onPressHandler={pressItemHandler}
                    key={i.toString() + job.uid}
                    isOwner={isOwner}
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
  // const userTest = useSelector((state: AppState) => state.user);
  const ownerJobs = useSelector((state: AppState) => state.job.ownerJobs);
  const travelerJobs = useSelector((state: AppState) => state.job.travelerJobs);

  const dispatch = useDispatch();

  const getJobs = async () => {
    const oJobs = await getUserOwnJob(userId);
    const tJobs = await getUserTravelerJobs(userId);
    dispatch(
      setOwnerTravlerJobs({
        ownerJobs: oJobs,
        travelerJobs: tJobs
      })
    );
  };

  useEffect(() => {
    getJobs();
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
      <Tab.Screen name="Sender" options={{ tabBarLabel: 'Sender' }}>
        {() => (
          <HomeScreenTab jobType="ownerJobs" jobsList={ownerJobs} isOwner />
        )}
      </Tab.Screen>
      <Tab.Screen name="Traveler" options={{ tabBarLabel: 'Traveler' }}>
        {() => (
          <HomeScreenTab
            jobType="travelerJobs"
            jobsList={travelerJobs}
            isOwner={false}
          />
          // add new component here
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
    <Stack.Screen name="Job" component={JobItemScreenTabs} />
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
    <Stack.Screen
      name="Add Trip"
      component={NewTrip}
      options={{ headerShown: true, headerTitle: '' }}
    />
  </Stack.Navigator>
);

export default HomeStack;
