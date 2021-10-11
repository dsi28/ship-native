import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobStatusComponent from '../../../components/job/status/index';
import VerticalStepIndicator from '../../../components/stepIndicator/index';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import styles from './styles';

const stepNames = {
  data: [
    {
      title: 'Searching for traveler'
    },
    {
      title: 'Item shipped to traveler'
    },
    {
      title: 'Item confirmed by traveler'
    },
    {
      title: 'Traveler is on their way'
    },
    {
      title: 'Traveler delivered the item'
    },
    {
      title: 'Receiver collected the item'
    },
    {
      title: 'Item confirmed by receiver'
    },
    {
      title: 'Payment is made'
    }
  ]
};

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

/// /new 2

interface TrackJobProps {
  // route: any;
  job: IJob;
}

const TrackJob: React.FC<TrackJobProps> = ({ job }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState('');
  const getDate = (): string => {
    if (job?.itemDeliveryDate !== undefined) {
      if (
        typeof job?.itemDeliveryDate === 'object' &&
        // @ts-ignore
        typeof job?.itemDeliveryDate.toDate !== 'undefined'
      ) {
        return (
          job?.itemDeliveryDate
            // @ts-ignore
            .toDate()
            .toDateString()
            .toString()
        );
      }
      return new Date(
        // @ts-ignore
        job?.itemDeliveryDate
      )
        .toDateString()
        .toString();
    }
    return 'No date set';
  };

  useEffect(() => {
    setDate(getDate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // const job = route.params;
    <ScrollView style={styles.container}>
      <View style={styles.scrollContainer}>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 17 }}>Expected item delivery date</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{date}</Text>
          </View>
        </View>
        <View>
          <VerticalStepIndicator
            currentStep={currentStep}
            stepNames={stepNames}
          />
        </View>
        <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
          <JobStatusComponent
            stepNames={stepNames}
            job={job}
            currentStep={currentStep}
          />
        </View>
        <View>
          <Pressable
            style={{ width: '100%' }}
            onPress={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            <Text style={{ color: 'orange' }}>press</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

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
          <TrackJob job={job} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

/// end new
export default JobItemScreenTabs;
