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
import SearchJobScreen from './JobScreen';
import styles from './styles';

function SearchScreen() {
  const userId = useSelector((state: AppState) => state.user.uid);
  const [jobList, setJobList] = useState([]);
  // const dispatch = useDispatch();

  const getJobs = async () => {
    console.log(userId);
    const jobs = await getOpenJobs(userId);
    console.log('JOOOOOOOOOOOOBs ', jobs);
    // @ts-ignore
    setJobList(jobs);
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

        {jobList.length > 0 ? (
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
            <ItemComponent
              // eslint-disable-next-line no-underscore-dangle
              jobItem={{
                itemName: 'Filler Job',
                itemCategory: 'category 5',
                // @ts-ignore
                itemDeliveryDate: new Date().toString(),
                itemDeliveryLocation: 'Dallas, Tx',
                itemValue: 24,
                itemImages:
                  'file:///storage/emulated/0/Android/data/com.shipnativeapp/files/Pictures/0e25c7de-10d3-4076-952a-86bd41641850.jpg', // TODO only one image for now will add more images and make this a string array later.
                itemSize: 'extra large',
                itemWeight: { weight: { max: 20, text: 'Around 5-20 lbs' } },
                note: 'test 123, this is the note',
                itemReceiver: { email: 'benny@camelo.com', name: 'Benny' },
                shipmentCost: 22,
                owner: 'SPfn6YeX5tT1MCSSC5cd8LWG04v1', // uid
                status: 'needs traveler',
                travelerRequests: []
              }}
              onPressHandler={pressItemHandler}
              // eslint-disable-next-line no-underscore-dangle
              key="1"
            />

            {/* seperate */}

            <ItemComponent
              // eslint-disable-next-line no-underscore-dangle
              jobItem={{
                itemName: 'Filler Job',
                itemCategory: 'category 5',
                // @ts-ignore
                itemDeliveryDate: new Date().toString(),
                itemDeliveryLocation: 'Dallas, Tx',
                itemValue: 24,
                itemImages:
                  'file:///storage/emulated/0/Android/data/com.shipnativeapp/files/Pictures/0e25c7de-10d3-4076-952a-86bd41641850.jpg', // TODO only one image for now will add more images and make this a string array later.
                itemSize: 'extra large',
                itemWeight: { weight: { max: 20, text: 'Around 5-20 lbs' } },
                note: 'test 123, this is the note',
                itemReceiver: { email: 'benny@camelo.com', name: 'Benny' },
                shipmentCost: 22,
                owner: 'SPfn6YeX5tT1MCSSC5cd8LWG04v1', // uid
                status: 'needs traveler',
                travelerRequests: []
              }}
              onPressHandler={pressItemHandler}
              // eslint-disable-next-line no-underscore-dangle
              key="2"
            />

            <ItemComponent
              // eslint-disable-next-line no-underscore-dangle
              jobItem={{
                itemName: 'Filler Job',
                itemCategory: 'category 5',
                // @ts-ignore
                itemDeliveryDate: new Date().toString(),
                itemDeliveryLocation: 'Dallas, Tx',
                itemValue: 24,
                itemImages:
                  'file:///storage/emulated/0/Android/data/com.shipnativeapp/files/Pictures/0e25c7de-10d3-4076-952a-86bd41641850.jpg', // TODO only one image for now will add more images and make this a string array later.
                itemSize: 'extra large',
                itemWeight: { weight: { max: 20, text: 'Around 5-20 lbs' } },
                note: 'test 123, this is the note',
                itemReceiver: { email: 'benny@camelo.com', name: 'Benny' },
                shipmentCost: 22,
                owner: 'SPfn6YeX5tT1MCSSC5cd8LWG04v1', // uid
                status: 'needs traveler',
                travelerRequests: []
              }}
              onPressHandler={pressItemHandler}
              // eslint-disable-next-line no-underscore-dangle
              key="3"
            />
            <ItemComponent
              // eslint-disable-next-line no-underscore-dangle
              jobItem={{
                itemName: 'Filler Job',
                itemCategory: 'category 5',
                // @ts-ignore
                itemDeliveryDate: new Date().toString(),
                itemDeliveryLocation: 'Dallas, Tx',
                itemValue: 24,
                itemImages:
                  'file:///storage/emulated/0/Android/data/com.shipnativeapp/files/Pictures/0e25c7de-10d3-4076-952a-86bd41641850.jpg', // TODO only one image for now will add more images and make this a string array later.
                itemSize: 'extra large',
                itemWeight: { weight: { max: 20, text: 'Around 5-20 lbs' } },
                note: 'test 123, this is the note',
                itemReceiver: { email: 'benny@camelo.com', name: 'Benny' },
                shipmentCost: 22,
                owner: 'SPfn6YeX5tT1MCSSC5cd8LWG04v1', // uid
                status: 'needs traveler',
                travelerRequests: []
              }}
              onPressHandler={pressItemHandler}
              // eslint-disable-next-line no-underscore-dangle
              key="4"
            />
            <ItemComponent
              // eslint-disable-next-line no-underscore-dangle
              jobItem={{
                itemName: 'Filler Job',
                itemCategory: 'category 5',
                // @ts-ignore
                itemDeliveryDate: new Date().toString(),
                itemDeliveryLocation: 'Dallas, Tx',
                itemValue: 24,
                itemImages:
                  'file:///storage/emulated/0/Android/data/com.shipnativeapp/files/Pictures/0e25c7de-10d3-4076-952a-86bd41641850.jpg', // TODO only one image for now will add more images and make this a string array later.
                itemSize: 'extra large',
                itemWeight: { weight: { max: 20, text: 'Around 5-20 lbs' } },
                note: 'test 123, this is the note',
                itemReceiver: { email: 'benny@camelo.com', name: 'Benny' },
                shipmentCost: 22,
                owner: 'SPfn6YeX5tT1MCSSC5cd8LWG04v1', // uid
                status: 'needs traveler',
                travelerRequests: []
              }}
              onPressHandler={pressItemHandler}
              // eslint-disable-next-line no-underscore-dangle
              key="5"
            />

            {/* end seperate */}
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
      name="HomeScreen"
      component={SearchScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SearchJobScreen"
      component={SearchJobScreen}
      options={{ title: '' }}
    />
  </Stack.Navigator>
);

export default SearchStack;
