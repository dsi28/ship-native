import React from 'react';
import { View } from 'react-native';
import JobPropertyComponent from '../../job/property';

interface DarkBackgroundPropertyComponentProps {}

const DarkBackgroundPropertyComponent: React.FC<DarkBackgroundPropertyComponentProps> = () => (
  <View
    style={{
      paddingTop: 20,
      paddingHorizontal: 25,
      backgroundColor: '#f3f5fa'
    }}
  >
    <JobPropertyComponent
      title="About Travler"
      value="This is what the travler is about. The traveler is about this. Blah, blah, blah."
    />
  </View>
);
export default DarkBackgroundPropertyComponent;
