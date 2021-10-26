import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface TravelerPaymentComponentProps {
  value: string | number;
  text: string;
  includeDollar: boolean;
}

const TravelerPaymentComponent: React.FC<TravelerPaymentComponentProps> = ({
  value,
  text = 'Traveler will be paid on delivery',
  includeDollar
}) => (
  <View style={styles.paymentContainer}>
    <Text style={styles.paymentText}>{text}</Text>
    <View style={styles.paymentAlignment}>
      {includeDollar && <Text style={styles.paymentAmount}>$</Text>}
      <Text style={styles.paymentAmount}>{value}</Text>
    </View>
  </View>
);

export default TravelerPaymentComponent;
