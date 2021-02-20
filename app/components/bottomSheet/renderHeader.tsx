import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const RenderHeader = () => (
  <View style={styles.headerContainer}>
    <View style={styles.headerSubContainer}>
      <View style={styles.headerContent} />
    </View>
  </View>
);

export default RenderHeader;
