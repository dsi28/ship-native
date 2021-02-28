import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import TravelerRequestItemComponent from '../../../components/job/TravelerRequestItem';
import styles from './styles';

const TravelerRequests: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  const pressItemHandler = () => {
    console.log('item pressed');
    // NavigationService.navigate('Job', JobItem);
  };
  return (
    <ScrollView style={{ backgroundColor: '#f3f5fa' }}>
      <View style={styles.container}>
        <TravelerRequestItemComponent onPressHandler={pressItemHandler} />
        <TravelerRequestItemComponent onPressHandler={pressItemHandler} />
      </View>
    </ScrollView>
  );
};

export default TravelerRequests;
