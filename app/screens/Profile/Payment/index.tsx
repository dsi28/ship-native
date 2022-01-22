import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface ProfilePaymentProps {
  userProfile?: any; // remove ? when we pass user here
}

const ProfilePayment: React.FC<ProfilePaymentProps> = () => (
  <View style={styles.container}>
    <Text>Payment</Text>
  </View>
);
export default ProfilePayment;
