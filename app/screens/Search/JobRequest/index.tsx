import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobPropertyComponent from '../../../components/job/property';
import NumberToggler from '../../../components/numberToggler';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import { AppState } from '../../../redux/store/configureStore';
import { jobTravelRequest } from '../../../services/jobs';
import styles from './styles';

interface SearchJobScreenProps {
  route: any;
}

const SearchJobRequest: React.FC<SearchJobScreenProps> = ({ route }) => {
  const job: IJob = route.params;
  const userId = useSelector((state: AppState) => state.user.uid);

  const [daysBefore, setDaysBefore] = useState(1);
  console.log('job in search', job);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15, marginVertical: 35 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
            Request to deliver
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>
            {job.itemName}
          </Text>
        </View>
        <View>
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <JobPropertyComponent
                title="Deliver by"
                // @ts-ignore
                value={new Date(job.itemDeliveryDate?.toDate()).toDateString()}
              />
            </View>
            <View>
              <JobPropertyComponent
                title="Deliver location"
                // @ts-ignore
                value={job.itemDeliveryLocation}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#87CEEB',
              width: '100%',
              paddingVertical: 25,
              paddingHorizontal: 15,
              marginBottom: 25
            }}
          >
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                color: 'white'
              }}
            >
              Traveler will be paid on delivery
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white'
              }}
            >
              {job.shipmentCost || 'cost not set'}
            </Text>
          </View>
          <View style={{ marginHorizontal: 15 }}>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center'
                }}
              >
                Receive the item from the owner prior
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <NumberToggler count={daysBefore} setCount={setDaysBefore} />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 15, marginTop: 20, marginBottom: 15 }}>
          <View style={{ marginBottom: 15 }}>
            <WideButton
              buttonText="Request to Carry This Package"
              onPressHandler={() => {
                jobTravelRequest(job, userId);
                console.log('send request to carry package');
                NavigationService.navigate('SearchScreen');
              }}
              isSelected
              btnBackgoundColor="#e91e63"
              btnTextColor="white"
              btnBorderColor="#e91e63"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => {
                console.log('cancel request');
                NavigationService.navigate('SearchScreen');
              }}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="#e91e63"
              btnBorderColor="#e91e63"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SearchJobRequest;
