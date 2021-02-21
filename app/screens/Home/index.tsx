import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import styles from './styles';

// interface ProfileProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const HomeScreen: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Hom Screen</Text>
      </View>
    </ScrollView>
  );
};

const Stack = createStackNavigator();
const HomeStack: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
