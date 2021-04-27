import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import BasicInfoSection from '../../../components/profile/BasicInfoSection';
import MainProfileItem from '../../../components/profile/MainProfileItem';
import { logOutJob } from '../../../redux/actions/job';
import { logOutProfileUser } from '../../../redux/actions/postProfile';
import ProfileReviews from '../Reviews';
import styles from './styles';

const SellerProfile: React.FC = () => {
  // @ts-ignore
  const userProfile = useSelector((state: AppState) => state.profile);
  const dispatch = useDispatch();

  // @ts-ignore
  const testState = useSelector((state: AppState) => state);
  console.log(userProfile);

  console.log('test state before: ', testState);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('user signed out firebase');
        // clear redux
        dispatch(logOutProfileUser());
        dispatch(logOutJob());
        console.log('test state after', testState);
      });
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.basicInfoContainer}>
          {/* <CarouselSection data={userProfile.pictures} /> */}
          <BasicInfoSection userProfile={userProfile} />
        </View>

        <View style={styles.itemContainer}>
          <View>
            <MainProfileItem
              itemName="My Trips"
              iconName="airplanemode-active"
              onPressHandler={() => console.log('My Trips')}
            />

            <MainProfileItem
              itemName="Notifications"
              iconName="notifications"
              onPressHandler={() => console.log('Notifications')}
            />

            <MainProfileItem
              itemName="Settings"
              iconName="settings"
              onPressHandler={() => console.log('Settings')}
            />

            <MainProfileItem
              itemName="Help"
              iconName="help"
              onPressHandler={() => console.log('Help')}
            />

            <MainProfileItem
              itemName="Give us Feedback"
              iconName="feedback"
              onPressHandler={() => console.log('feedback')}
            />
            <MainProfileItem
              itemName="Logout"
              iconName="logout"
              onPressHandler={handleLogout}
            />
          </View>
        </View>
        {/* <AboutSection />
        <ConfirmedSection />
        <ReviewSection /> */}
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();
const SellerProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={SellerProfile} />
    <Stack.Screen name="Reviews" component={ProfileReviews} />
  </Stack.Navigator>
);

export default SellerProfileStack;
