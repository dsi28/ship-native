import React from 'react';
import { Image, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import JobPropertyComponent from '../../../components/job/property';
import styles from './styles';

// interface ProfileProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const JobItem: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={{ marginHorizontal: 15 }}>
          <View>
            <Text
              style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30 }}
            >
              Item Details
            </Text>
          </View>
          {/* TODO get real item detail values */}
          <JobPropertyComponent title="Item Name" value="Alphonso Mangoes" />
          <JobPropertyComponent title="Item Category" value="Food" />
          <JobPropertyComponent
            title="Item Delivery Date"
            value="January 27, 2021"
          />
          <JobPropertyComponent
            title="Delivery Location"
            value="Miami, Florida, 33130, United States"
          />
          <JobPropertyComponent title="Item Weight" value="Around 5-20 lbs" />
          <JobPropertyComponent
            title="Item Size"
            value="Large, Needs to be shipped in the cargo area"
          />
          <JobPropertyComponent
            title="Notes from Owner"
            value="These are the owners notes. Please read these notes. Thank you for reading these notes."
          />
          <View style={{ marginBottom: 25 }}>
            <Text style={{ fontSize: 18, marginBottom: 7, fontWeight: 'bold' }}>
              Item Images:
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <View
                style={{
                  width: 100,
                  backgroundColor: 'lightgray',
                  marginRight: 20
                }}
              >
                <Image
                  style={{
                    // flex: 2,
                    height: 100,
                    width: 100
                  }}
                  // resizeMode="contain"
                  resizeMode="cover"
                  // eslint-disable-next-line global-require
                  source={require('../../../assets/images/mango.jpg')}
                />
              </View>
              <View
                style={{
                  width: 100,
                  backgroundColor: 'lightgray'
                }}
              >
                <Image
                  style={{
                    height: 100,
                    width: 100
                  }}
                  // resizeMode="contain"
                  resizeMode="cover"
                  // eslint-disable-next-line global-require
                  source={require('../../../assets/images/mango.jpg')}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#f3f5fa',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 10,
            paddingHorizontal: 15
          }}
        >
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
              Receiver Details
            </Text>
          </View>
          <JobPropertyComponent title="Name" value="Alice Chaser" />
          <JobPropertyComponent title="Email" value="achaser@email.com" />
        </View>
        <View
          style={{
            backgroundColor: '#f3f5fa',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 10,
            paddingHorizontal: 15
          }}
        >
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
              Receiver Details
            </Text>
          </View>
          <JobPropertyComponent title="Name" value="Alice Chaser" />
          <JobPropertyComponent title="Email" value="achaser@email.com" />
        </View>
        <View
          style={{
            backgroundColor: '#87CEEB',
            width: '100%',
            paddingVertical: 25,
            paddingHorizontal: 15
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
            $60
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default JobItem;
