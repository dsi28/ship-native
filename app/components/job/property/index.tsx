import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface JobPropertyComponentProps {
  title: string;
  value: string;
}

const JobPropertyComponent: React.FC<JobPropertyComponentProps> = ({
  title,
  value
}) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>{title}:</Text>
    <Text style={styles.valueText}>{value}</Text>
  </View>
);
export default JobPropertyComponent;
