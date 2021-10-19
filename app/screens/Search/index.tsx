import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import FilterModal from '../../components/FormInputs/FilterModal';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [deliveryLocationFilter, setDeliveryLocationFilter] = useState('');
  const [originLocationFilter, setOriginLocationFilter] = useState('');
  // const dispatch = useDispatch();

  const getJobs = async () => {
    console.log(userId);
    const jobs = await getOpenJobs(userId);
    console.log('JOOOOOOOOOOOOBs ', jobs);
    // @ts-ignore
    setJobList(jobs);
  };

  const updateFilterJobs = async () => {
    if (originLocationFilter !== '' || deliveryLocationFilter !== '') {
      const filterJobs = jobList.map((job: IJob) => {
        if (originLocationFilter !== '' && deliveryLocationFilter !== '') {
          console.log('test both');
          return (
            job.itemPickupLocation === originLocationFilter &&
            job.itemDeliveryLocation === deliveryLocationFilter
          );
        }
        if (originLocationFilter !== '' && deliveryLocationFilter === '') {
          console.log('origin only');
          return job.itemPickupLocation === originLocationFilter;
        }
        if (originLocationFilter === '' && deliveryLocationFilter !== '') {
          console.log('deliver only');
          return job.itemDeliveryLocation === deliveryLocationFilter;
        }
        return job;
      });
      console.log('filter jobs: ', filterJobs);
      // @ts-ignore
      setJobList(filterJobs);
    }
  };

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pressItemHandler = (job: IJob) => {
    console.log('item pressed');
    NavigationService.navigate('SearchJobScreen', job);
  };
  // console.log('job state', jobState.ownerJobs, 'FULL');
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.container}>
        <FilterModal
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
          deliveryLocationFilter={deliveryLocationFilter}
          setDeliveryLocationFilter={setDeliveryLocationFilter}
          originLocationFilter={originLocationFilter}
          setOriginLocationFilter={setOriginLocationFilter}
          updateFilterJobs={updateFilterJobs}
        />
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.filterTitle}>Near Me</Text>
          </View>
          <View style={styles.filterIconsContainer}>
            <View style={styles.iconView}>
              <Pressable
                onPress={() => {
                  console.log('press filter icon');
                  setModalVisible(!modalVisible);
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
                console.log('job here, ', fbJob);
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
                    isOwner={false}
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
