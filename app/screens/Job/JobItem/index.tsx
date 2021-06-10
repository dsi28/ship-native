import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

interface JobItemProps {
  // route: any;
  job: IJob;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => (
  // const job = route.params;
  <ScrollView style={styles.container}>
    <View style={styles.scrollContainer}>
      <JobDetails job={job} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <WideButton
            buttonText="View Traveler Requests"
            onPressHandler={() => {
              console.log('view traveler reqeuests');
              NavigationService.navigate('Traveler Requests', job);
            }}
            isSelected
            btnBackgoundColor="mediumvioletred"
            btnTextColor="white"
            btnBorderColor="mediumvioletred"
          />
        </View>
        <View style={styles.buttonContainer}>
          <WideButton
            buttonText="Edit Job"
            onPressHandler={() => console.log('edit job')}
            isSelected
            btnBackgoundColor="white"
            btnTextColor="mediumvioletred"
            btnBorderColor="mediumvioletred"
          />
        </View>
        <View>
          <WideButton
            buttonText="Close Job"
            onPressHandler={() => console.log('close job')}
            isSelected
            btnBackgoundColor="white"
            btnTextColor="mediumvioletred"
            btnBorderColor="mediumvioletred"
          />
        </View>
      </View>
    </View>
  </ScrollView>
);
/// /////new

const Tab = createMaterialTopTabNavigator();

function JobItemScreenTabs({ route }: any) {
  const job = route.params;

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'lightgray',
        labelStyle: { fontSize: 17, fontWeight: 'bold' },
        indicatorStyle: { backgroundColor: '#e91e63' },
        style: { backgroundColor: 'white' }
      }}
    >
      <Tab.Screen name="Sender" options={{ tabBarLabel: 'Item Details' }}>
        {() => (
          // @ts-ignore
          <JobItem job={job} />
        )}
      </Tab.Screen>
      <Tab.Screen name="Traveler" options={{ tabBarLabel: 'Track Item' }}>
        {() => (
          // @ts-ignore
          <JobItem job={job} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

/// end new
export default JobItemScreenTabs;
