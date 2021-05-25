import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ItemComponent from '../../components/home/ItemComponent';
import { IJob } from '../../models/IJob';
import NavigationService from '../../navigation/NavigationService';
import styles from './styles';

function SearchScreen() {
  // const userId = useSelector((state: AppState) => state.user.uid);
  // const [jobList, setJobList] = useState([]);
  // const dispatch = useDispatch();

  const pressItemHandler = (job: IJob) => {
    console.log('item pressed');
    NavigationService.navigate('Job', job);
  };
  // console.log('job state', jobState.ownerJobs, 'FULL');
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        <View>
          <View>
            <Text>Near Me</Text>
          </View>
        </View>
        {/* @ts-ignore */}
        {/* {jobList.map((jobItem: any) => (
          <ItemComponent
            // eslint-disable-next-line no-underscore-dangle
            jobItem={jobItem}
            onPressHandler={pressItemHandler}
            // eslint-disable-next-line no-underscore-dangle
            key={jobItem.itemName}
          />
        ))} */}
        <ItemComponent
          // eslint-disable-next-line no-underscore-dangle
          jobItem={{
            itemName: 'Test Job',
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
          key="Test Job"
        />

        {/* seperate */}

        <ItemComponent
          // eslint-disable-next-line no-underscore-dangle
          jobItem={{
            itemName: 'Test Job',
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
          key="Test Job"
        />

        <ItemComponent
          // eslint-disable-next-line no-underscore-dangle
          jobItem={{
            itemName: 'Test Job',
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
          key="Test Job"
        />
        <ItemComponent
          // eslint-disable-next-line no-underscore-dangle
          jobItem={{
            itemName: 'Test Job',
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
          key="Test Job"
        />
        <ItemComponent
          // eslint-disable-next-line no-underscore-dangle
          jobItem={{
            itemName: 'Test Job',
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
          key="Test Job"
        />

        {/* end seperate */}
      </View>
    </ScrollView>
  );
}

export default SearchScreen;
