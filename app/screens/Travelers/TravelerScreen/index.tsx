import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import JobPropertyComponent from '../../../components/job/property';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import styles from './styles';

const TravelerScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TravelerHeaderComponent />
        <View
          style={{
            width: Dimensions.get('screen').width,
            backgroundColor: '#f3f5fa',
            paddingHorizontal: 20,
            paddingVertical: 15,
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5
              }}
            >
              <MaterialIcon name="location-pin" size={30} color="#87CEEB" />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: 'mediumvioletred',
                  fontWeight: 'bold'
                }}
              >
                100 Miles Away
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 5
              }}
            >
              <MaterialIcon name="chat" size={30} color="mediumvioletred" />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: 'mediumvioletred',
                  fontWeight: 'bold'
                }}
              >
                Chat
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, marginHorizontal: 25 }}>
          <JobPropertyComponent title="Flying on" value="January 12, 2021" />
          <JobPropertyComponent title="Flying to" value="Florida, USA" />
          <JobPropertyComponent
            title="Address"
            value="167 NW 23rd St, Miami, FL 33127"
          />
          <JobPropertyComponent
            title="Receive the item from the sender prior"
            value="1 day before traveling"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelerScreen;
