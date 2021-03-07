import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobPropertyComponent from '../../../components/job/property';
import NavigationService from '../../../navigation/NavigationService';
import ProfileReviews from '../../Profile/Reviews';
import styles from './styles';

// interface AcceptTravlerProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const AcceptTravler: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View
          style={{
            backgroundColor: '#f3f5fa',
            width: '100%',
            paddingTop: 30,
            paddingBottom: 10,
            paddingHorizontal: 15
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View
              style={{
                width: 80,
                backgroundColor: 'lightgray',
                height: 80,
                borderRadius: 40,
                // borderWidth: 5,
                // borderColor: 'lightgray',
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10
              }}
            >
              <Image
                style={{ height: '100%', width: '100%', borderRadius: 40 }}
                // resizeMode="contain"
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginHorizontal: 10,
                // alignItems: 'center'
                justifyContent: 'flex-end'
              }}
            >
              <View style={{ marginBottom: 5 }}>
                <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                  James Rodriguez
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 40
                }}
              >
                <View
                  style={{
                    marginRight: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Pressable
                    onPress={() => {
                      console.log('reviews');
                      NavigationService.navigate(
                        'Traveler Reviews',
                        ProfileReviews
                      );
                    }}
                  >
                    <StarIcon name="star" size={17} color="#e91e63" />
                  </Pressable>
                </View>
                <View
                  style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                  <Pressable
                    onPress={() => {
                      console.log('reviews');
                      NavigationService.navigate(
                        'Traveler Reviews',
                        ProfileReviews
                      );
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        fontWeight: 'bold'
                      }}
                    >
                      4.5 (4 reviews)
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View>
            <JobPropertyComponent title="Flying on" value="January 12, 2021" />
            <JobPropertyComponent title="Flying to" value="Florida, USA" />
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 25 }}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                // TODO https://github.com/oblador/react-native-vector-icons/issues/774
                marginLeft: -5
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
        </View>
        <View style={{ marginTop: 25 }}>
          <JobDetails />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Escrow Amount"
              onPressHandler={() => {
                console.log('Escrow amount');
                // NavigationService.navigate(
                //   'Traveler Requests',
                //   TravelerRequests
                // );
              }}
              isSelected
              btnBackgoundColor="orange"
              btnTextColor="white"
              btnBorderColor="orange"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => console.log('cancel')}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="orange"
              btnBorderColor="orange"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default AcceptTravler;
