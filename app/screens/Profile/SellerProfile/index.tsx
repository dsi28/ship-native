import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import BasicInfoSection from '../../../components/profile/BasicInfoSection';
import MainProfileItem from '../../../components/profile/MainProfileItem';
import ProfileReviews from '../Reviews';
import styles from './styles';

const SellerProfile: React.FC = () => {
  // @ts-ignore
  const userProfile = useSelector((state: AppState) => state.profile);
  console.log(userProfile);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.basicInfoContainer}>
          {/* <CarouselSection data={userProfile.pictures} /> */}
          <BasicInfoSection userProfile={userProfile} />
        </View>

        <View style={styles.itemContainer}>
          <View>
            <MainProfileItem iconName="logout" onPressHandler={handleLogout} />
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
