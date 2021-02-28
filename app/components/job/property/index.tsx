import React from 'react';
import { Text, View } from 'react-native';

interface JobPropertyComponentProps {
  title: string;
  value: string;
}

const JobPropertyComponent: React.FC<JobPropertyComponentProps> = ({
  title,
  value
}) => (
  <View style={{ marginBottom: 25 }}>
    <Text style={{ fontSize: 18, marginBottom: 7 }}>{title}:</Text>
    <Text style={{ fontSize: 22, fontWeight: 'bold', lineHeight: 35 }}>
      {value}
    </Text>
  </View>
);
export default JobPropertyComponent;
