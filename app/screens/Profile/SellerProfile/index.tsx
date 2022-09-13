import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import BasicInfoSection from '../../../components/profile/BasicInfoSection';
import MainProfileItem from '../../../components/profile/MainProfileItem';
import NavigationService from '../../../navigation/NavigationService';
import { logOutJob } from '../../../redux/actions/job';
import { logOutProfileUser } from '../../../redux/actions/postProfile';
import { logOffUserAction } from '../../../redux/actions/user';
import { logoutUser } from '../../../services/auth';
import ProfilePayment from '../Payment';
import ProfileReviews from '../Reviews';
import styles from './styles';

const SellerProfile: React.FC = () => {
  // @ts-ignore
  const userState = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logoutUser();
    // clear redux
    dispatch(logOutProfileUser());
    dispatch(logOutJob());
    dispatch(logOffUserAction());
  };
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.basicInfoContainer}>
          {/* <CarouselSection data={userState.pictures} /> */}
          <BasicInfoSection userProfile={userState} />
        </View>
        <View style={styles.itemContainer}>
          <View>
            <MainProfileItem
              itemName="Help"
              iconName="help"
              onPressHandler={() => console.log('Help')}
              bluredItem={false}
            />
            <MainProfileItem
              itemName="Give us Feedback"
              iconName="feedback"
              onPressHandler={() => console.log('feedback')}
              bluredItem={false}
            />
            <MainProfileItem
              itemName="Logout"
              iconName="logout"
              onPressHandler={handleLogout}
              bluredItem={false}
            />
            <MainProfileItem
              itemName="My Trips"
              iconName="airplanemode-active"
              onPressHandler={() => console.log('My Trips')}
              bluredItem
            />

            <MainProfileItem
              itemName="Notifications"
              iconName="notifications"
              onPressHandler={() => console.log('Notifications')}
              bluredItem
            />
            <MainProfileItem
              itemName="Payment"
              iconName="payment"
              onPressHandler={() => {
                console.log('Payment');
                NavigationService.navigate('Payment');
              }}
              bluredItem
            />
            <MainProfileItem
              itemName="Settings"
              iconName="settings"
              onPressHandler={() => console.log('Settings')}
              bluredItem
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
    <Stack.Screen name="Payment" component={ProfilePayment} />
  </Stack.Navigator>
);

export default SellerProfileStack;
