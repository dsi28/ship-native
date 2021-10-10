import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface TravelerPaymentComponentProps {
  value: string | number;
  text: string;
}

const TravelerPaymentComponent: React.FC<TravelerPaymentComponentProps> = ({
  value,
  text = 'Traveler will be paid on delivery'
}) => (
  <View style={styles.paymentContainer}>
    <Text style={styles.paymentText}>{text}</Text>
    <Text style={styles.paymentAmount}>{value}</Text>
  </View>
);

export default TravelerPaymentComponent;
