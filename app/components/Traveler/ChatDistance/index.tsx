import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

interface TravelerCDComponentProps {}

const TravelerCDComponent: React.FC<TravelerCDComponentProps> = () => (
  <View style={styles.container}>
    <View style={styles.cdContainer}>
      <View style={styles.cdIconContainer}>
        <MaterialIcon name="chat" size={30} color="mediumvioletred" />
      </View>
      <View style={styles.cdTextContainer}>
        <Text style={styles.cdText}>Chat</Text>
      </View>
    </View>
  </View>
);
export default TravelerCDComponent;
