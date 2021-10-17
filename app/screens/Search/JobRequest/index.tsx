import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import DropDownFormInput from '../../../components/FormInputs/DropDown';
import JobPropertyComponent from '../../../components/job/property';
import NumberToggler from '../../../components/numberToggler';
import TravelerPaymentComponent from '../../../components/Traveler/TravelerPayment';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import { AppState } from '../../../redux/store/configureStore';
import { jobTravelRequest } from '../../../services/jobs';
import { getTripsFirebase } from '../../../services/trip';
import styles from './styles';

interface SearchJobScreenProps {
  route: any;
}

const SearchJobRequest: React.FC<SearchJobScreenProps> = ({ route }) => {
  const job: IJob = route.params;
  const userId = useSelector((state: AppState) => state.user.uid);

  const [daysBefore, setDaysBefore] = useState(1);
  const [travelerTrips, setTravelerTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState<string>('');
  const handleTripChange = (tripId: string) => {
    setSelectedTrip(tripId);
  };

  const getUserTrips = async () => {
    const tripsList = await getTripsFirebase(userId);
    // @ts-ignore
    setTravelerTrips(tripsList);
  };

  useEffect(() => {
    getUserTrips();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Request to deliver</Text>
          <Text style={styles.titleText}>{job.itemName}</Text>
        </View>
        <View>
          <View style={styles.deliveryContainer}>
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
          <View style={styles.receiveContainer}>
            <View style={styles.receiveTitleContainer}>
              <Text style={styles.receiveTitle}>
                Receive the item from the owner prior
              </Text>
            </View>
            <View style={styles.receiveTogglerContainer}>
              <NumberToggler count={daysBefore} setCount={setDaysBefore} />
            </View>
          </View>
          <View style={styles.receiveContainer}>
            <View style={{ marginTop: 30 }}>
              <Text style={styles.receiveTitle}>
                What trip are you taking to
              </Text>
              <Text style={styles.receiveTitle}>
                {job.itemDeliveryLocation}
              </Text>
            </View>
            <View>
              <Pressable
                style={{ alignSelf: 'center' }}
                onPress={() => {
                  console.log('new trip');
                  NavigationService.navigate('Home', {
                    screen: 'Add Trip'
                  });
                }}
              >
                <Text
                  style={{
                    color: '#e91e63',
                    fontSize: 17,
                    fontWeight: 'bold',
                    alignSelf: 'center'
                  }}
                >
                  Add Trip
                </Text>
              </Pressable>
            </View>
            <View style={{ borderRadius: 10 }}>
              <DropDownFormInput
                labelText=""
                placeholderText="select your trip"
                onChangeHandler={handleTripChange}
                itemList={
                  travelerTrips.length === 0
                    ? []
                    : travelerTrips.map((tripFb: any) => {
                        // eslint-disable-next-line no-underscore-dangle
                        const trip = tripFb._data;
                        return {
                          label: trip.arrivalCity,
                          value: trip.uid
                        };
                      })
                }
                inputValue={null}
              />
            </View>
          </View>
          <TravelerPaymentComponent
            value={job.shipmentCost || 'cost not set'}
            text="Traveler will be paid on delivery"
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Request to Carry This Package"
              onPressHandler={() => {
                jobTravelRequest(job, userId, selectedTrip);
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
