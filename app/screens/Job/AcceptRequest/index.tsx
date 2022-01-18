import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import StarIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobPropertyComponent from '../../../components/job/property';
import NavigationService from '../../../navigation/NavigationService';
import ProfileReviews from '../../Profile/Reviews';
import styles from './styles';

interface AcceptTravelerProps {
  route: any;
}

const AcceptTravler: React.FC<AcceptTravelerProps> = ({ route }) => {
  const { job } = route.params;

  return (
    // @ts-ignore default does exsist not sure why this show up
    // const userProfile = useSelector((state: AppState) => state.default);
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.headerSubContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode="cover"
                // eslint-disable-next-line global-require, import/no-dynamic-require
                source={require('../../../assets/images/mango.jpg')}
              />
            </View>
            <View style={styles.contentContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>James Rodriguez</Text>
              </View>
              <View style={styles.contentSubContainer}>
                <View style={styles.pressableContainer}>
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
                <View style={styles.pressableSimpleContainer}>
                  <Pressable
                    onPress={() => {
                      console.log('reviews');
                      NavigationService.navigate(
                        'Traveler Reviews',
                        ProfileReviews
                      );
                    }}
                  >
                    <Text style={styles.pressableText}>4.5 (4 reviews)</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View>
            <JobPropertyComponent title="Flying on" value="January 12, 2021" />
            <JobPropertyComponent title="Flying to" value="Florida, USA" />
          </View>
          <View style={styles.locationContainer}>
            <View style={styles.locationIconContainer}>
              <MaterialIcon name="location-pin" size={30} color="#87CEEB" />
            </View>
          </View>
        </View>
        <View style={styles.jobDetailsContainer}>
          <JobDetails job={job} />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <WideButton
              buttonText="Payment"
              onPressHandler={() => {
                console.log('Payment');
                // NavigationService.navigate(
                //   'Traveler Requests',
                //   TravelerRequests
                // );
              }}
              isSelected
              btnBackgoundColor="mediumvioletred"
              btnTextColor="white"
              btnBorderColor="mediumvioletred"
            />
          </View>
          <View>
            <WideButton
              buttonText="Cancel"
              onPressHandler={() => console.log('cancel')}
              isSelected
              btnBackgoundColor="white"
              btnTextColor="mediumvioletred"
              btnBorderColor="mediumvioletred"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default AcceptTravler;
