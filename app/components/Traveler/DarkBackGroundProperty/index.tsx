import React from 'react';
import { View } from 'react-native';
import JobPropertyComponent from '../../job/property';
import styles from './styles';

interface DarkBackgroundPropertyComponentProps {
  title: string;
  value: string;
}

const DarkBackgroundPropertyComponent: React.FC<DarkBackgroundPropertyComponentProps> = ({
  title,
  value
}) => (
  <View style={styles.container}>
    <JobPropertyComponent title={title} value={value} />
  </View>
);
export default DarkBackgroundPropertyComponent;
