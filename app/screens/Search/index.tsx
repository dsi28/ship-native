import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
import { AppState } from '../../redux/store/configureStore';
import { getOpenJobs } from '../../services/jobs';
import SearchJobRequest from './JobRequest';
import SearchJobScreen from './JobScreen';
import styles from './styles';

function SearchScreen() {
  const userId = useSelector((state: AppState) => state.user.uid);
  const [jobList, setJobList] = useState([]);
  // const dispatch = useDispatch();

  const getJobs = async () => {
    const jobs = await getOpenJobs(userId);
    // @ts-ignore
    setJobList(jobs);
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressItemHandler = (job: IJob) => {
    NavigationService.navigate('SearchJobScreen', job);
  };
  // console.log('job state', jobState.ownerJobs, 'FULL');
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.filterTitle}>Near Me</Text>
          </View>
          <View style={styles.filterIconsContainer}>
            <View style={styles.iconView}>
              <Pressable
                onPress={() => {
                  console.log('press map icon');
                }}
              >
                <MComIcon name="map" size={30} color="black" />
              </Pressable>
            </View>
            <View style={styles.iconView}>
              <Pressable
                onPress={() => {
                  console.log('press filter icon');
                }}
              >
                <MComIcon name="filter" size={30} color="black" />
              </Pressable>
            </View>
          </View>
        </View>

        {typeof jobList !== 'undefined' &&
        typeof jobList !== 'string' &&
        jobList.length > 0 ? (
          <View>
            <View>
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {jobList.map((fbJob: any) => {
                // @ts-ignore
                // eslint-disable-next-line no-underscore-dangle
                const job = fbJob._data;
                return (
                  <ItemComponent
                    // eslint-disable-next-line no-underscore-dangle
                    jobItem={job}
                    onPressHandler={pressItemHandler}
                    // eslint-disable-next-line no-underscore-dangle
                    key={job.itemName + job.owner}
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
}

const Stack = createStackNavigator();
const SearchStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchJobScreen"
      component={SearchJobScreen}
      options={{ title: '' }}
    />
    <Stack.Screen
      name="SearchJobRequest"
      component={SearchJobRequest}
      options={{ title: '' }}
    />
  </Stack.Navigator>
);

export default SearchStack;
