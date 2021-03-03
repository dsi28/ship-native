import React from 'react';
import { View } from 'react-native';
import JobPropertyComponent from '../../job/property';
import styles from './styles';

interface DarkBackgroundPropertyComponentProps {}

const DarkBackgroundPropertyComponent: React.FC<DarkBackgroundPropertyComponentProps> = () => (
  <View style={styles.container}>
    <JobPropertyComponent
      title="About Travler"
      value="This is what the travler is about. The traveler is about this. Blah, blah, blah."
    />
  </View>
);
export default DarkBackgroundPropertyComponent;
