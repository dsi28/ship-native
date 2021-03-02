import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import styles from './styles';

const TravelerScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <TravelerHeaderComponent />
      </View>
    </ScrollView>
  );
};

export default TravelerScreen;
