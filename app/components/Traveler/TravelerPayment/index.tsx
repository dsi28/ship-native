import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface TravelerPaymentComponentProps {
  value: string | number;
}

const TravelerPaymentComponent: React.FC<TravelerPaymentComponentProps> = ({
  value
}) => (
  <View style={styles.paymentContainer}>
    <Text style={styles.paymentText}>Traveler will be paid on delivery</Text>
    <Text style={styles.paymentAmount}>{value}</Text>
  </View>
);

export default TravelerPaymentComponent;
