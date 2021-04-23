import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import AboutSection from '../../../components/profile/AboutSection';
import BasicInfoSection from '../../../components/profile/BasicInfoSection';
import ConfirmedSection from '../../../components/profile/ConfirmedSection';
import ReviewSection from '../../../components/profile/ReviewSection';
import ProfileReviews from '../Reviews';
import styles from './styles';

const UserProfile: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <BasicInfoSection userProfile={userProfile} />
        <AboutSection />
        <ConfirmedSection />
        <ReviewSection />
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();
const UserProfileStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Profile" component={UserProfile} />
    <Stack.Screen name="Reviews" component={ProfileReviews} />
  </Stack.Navigator>
);

export default UserProfileStack;
