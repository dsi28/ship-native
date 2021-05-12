import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
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
  getJobs: () => Promise<
    | FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData>[]
    | 'failed to get jobs'
  >;
}

const HomeScreenTab: React.FC<HomeInputProps> = ({ jobType, getJobs }) => {
  const [jobList, setJobList] = useState([]);
  // const getJobs = useCallback(async () => {
  //   const ownerJobs = await getUserOwnJob(userId);
  //   // setCocktails(fetchedCocktails);
  //   if (typeof ownerJobs !== 'string') {
  //     console.log('Fireeee base jobs ', ownerJobs);
  //   }
  //   // console.log('In Catss', cocktails, 'end in cats');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    console.log('component did mount');

    getJobs().then((jobs) => {
      console.log('jobs', jobs);
      // @ts-ignore
      setJobList(jobs);
      // return jobs;
    });

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
        {/* @ts-ignore */}
        {jobList.map((jobItem: any) => (
          <ItemComponent
            // eslint-disable-next-line no-underscore-dangle
            jobItem={jobItem._data}
            onPressHandler={pressItemHandler}
            // eslint-disable-next-line no-underscore-dangle
            key={jobItem._data.itemName + jobType}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

function HomeScreenTabs() {
  const userId = useSelector((state: AppState) => state.user.uid);
  // const dispatch = useDispatch();
  const jobState = useSelector((state: AppState) => state.job);

  const getOwnerJobs = useCallback(async () => {
    const ownerJobs = await getUserOwnJob(userId);
    if (typeof ownerJobs !== 'string') {
      console.log('Fireeee base jobs ', ownerJobs);
      return ownerJobs;
    }
    return 'failed to get jobs';
    // console.log('In Catss', cocktails, 'end in cats');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('job state', jobState.ownerJobs, 'FULL');
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
            getJobs={getOwnerJobs}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Traveler" options={{ tabBarLabel: 'Traveler' }}>
        {() => (
          // @ts-ignore
          <HomeScreenTab
            // jobList={jobState.ownerJobs}
            jobType="Owner"
            getJobs={getOwnerJobs}
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
      options={{ headerTitle: 'Home' }}
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
