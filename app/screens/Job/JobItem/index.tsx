import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from './styles';

// interface ProfileProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const JobItem: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <Text>Job Item</Text>
      </View>
    </ScrollView>
  );
};
export default JobItem;
