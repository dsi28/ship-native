import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialComIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import JobPropertyComponent from '../../../components/job/property';
import { IJob } from '../../../models/IJob';
import styles from './styles';

interface SearchJobScreenProps {
  route: any;
}

const SearchJobScreen: React.FC<SearchJobScreenProps> = ({ route }) => {
  const job: IJob = route.params;
  console.log('job in search', job);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ marginHorizontal: 15, marginVertical: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Mangos</Text>
        </View>
        <View style={styles.cardView}>
          <Image
            style={styles.image}
            // source={{ uri: job.itemImages }}
            // eslint-disable-next-line global-require
            source={require('../../../assets/images/mango.jpg')}
          />
        </View>
        <View>
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <JobPropertyComponent
                title="Deliver to"
                // @ts-ignore
                value={job.itemDeliveryLocation}
              />
            </View>
            <View
              style={{
                marginBottom: 25,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <View
                  style={{
                    // marginRight: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 0
                  }}
                >
                  <MaterialIcon name="location-pin" size={30} color="#87CEEB" />
                </View>
                <View>
                  <Text style={{ fontSize: 20 }}>100 Miles</Text>
                </View>
              </View>
              <View>
                <Pressable onPress={() => console.log('view in map')}>
                  <Text style={{ fontSize: 20, color: '#e91e63' }}>
                    View in Map
                  </Text>
                </Pressable>
              </View>
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
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5
                }}
              >
                <MaterialIcon
                  name="wallet-giftcard"
                  size={30}
                  color="#87CEEB"
                />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {job.itemSize}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5
                }}
              >
                <MaterialIcon name="comment" size={30} color="#87CEEB" />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {job.itemWeight?.weight.text}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 10 }}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5
                }}
              >
                <MaterialComIcon
                  name="calendar-range"
                  size={30}
                  color="#87CEEB"
                />
              </View>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                  {/* @ts-ignore */}
                  By {new Date(job.itemDeliveryDate?.toDate()).toDateString()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default SearchJobScreen;
