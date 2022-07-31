import React, { useEffect, useState } from 'react';
import { Linking, Text, View } from 'react-native';
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IJob } from '../../../models/IJob';
import NavigationService from '../../../navigation/NavigationService';
import WideButton from '../../buttons/WideButton';
import JobPropertyComponent from '../property';
import styles from './styles';

interface JobStatusComponentProps {
  stepNames: {
    data: {
      title: string;
    }[];
  };
  job: IJob;
  currentStep: number;
  isOwner: boolean;
  updateStep: (newStep: number) => void;
}

const JobStatusComponent: React.FC<JobStatusComponentProps> = ({
  stepNames,
  job,
  currentStep,
  isOwner,
  updateStep
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [stepsDone, setStepsDone] = useState(false);
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

  const ownerStepSwitch = () => {
    switch (true) {
      case currentStep === 0:
        return (
          <View>
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
          </View>
        );
      case currentStep === 1:
        return (
          <View>
            <View>
              <View>
                <JobPropertyComponent
                  title="Deliver item to traveler by"
                  // @ts-ignore
                  value={date}
                />
              </View>
              <View>
                <JobPropertyComponent
                  title="Address"
                  // @ts-ignore
                  value={job.itemDeliveryLocation}
                />
              </View>
            </View>
            <View>
              <Text style={styles.stepText}>
                Deliver the package to the traveler{' '}
                {
                  // eslint-disable-next-line array-callback-return, consistent-return
                  job.travelerRequests?.filter((tRequest) => {
                    if (tRequest.status === 'accepted') {
                      return tRequest;
                    }
                  })[0].receiveDate
                }{' '}
                day before the flight date
              </Text>
            </View>
            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Item Shipped"
                onPressHandler={() => {
                  console.log('shipped');
                  updateStep(2);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 2:
        return (
          <View>
            <Text style={styles.stepText}>
              Waiting on the Traveler to confirm that they received the item
            </Text>
          </View>
        );
      case currentStep === 3:
        return (
          <View>
            <Text style={styles.stepText}>
              The Traveler received and confirmed the item
            </Text>
          </View>
        );
      case currentStep === 4:
        return (
          <View>
            <Text style={styles.stepText}>
              The Traveler is on their way to the destination and will confirm
              when they deliver the item
            </Text>
          </View>
        );
      case currentStep === 5:
        return (
          <View>
            <View>
              <Text style={styles.stepText}>
                The Traveler confirmed that they delivered the item. Please
                confirm the item was received.
              </Text>
            </View>
            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Confirm Item"
                onPressHandler={() => {
                  console.log('Confirm Item');
                  updateStep(6);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Contact Support"
                onPressHandler={() => {
                  console.log('Contact Support process/email');
                  Linking.openURL(
                    `mailto:support@juduh.com?subject=Contact Support&body=Job:${job.uid}\nOwner:${isOwner}\nStep:${currentStep}\nEnter the description here:`
                  );
                }}
                isSelected
                btnBackgoundColor="white"
                btnTextColor="mediumvioletred"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 6:
        return (
          <View>
            <View>
              <Text style={styles.stepText}>
                Please review the item and confirm the item
              </Text>
            </View>
            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Confirm Item"
                onPressHandler={() => {
                  console.log('Confirm Item');
                  updateStep(7);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Contact Support"
                onPressHandler={() => {
                  console.log('Contact Support process/email');
                  Linking.openURL(
                    `mailto:support@juduh.com?subject=Contact Support&body=Job:${job.uid}\nOwner:${isOwner}\nStep:${currentStep}\nEnter the description here:`
                  );
                }}
                isSelected
                btnBackgoundColor="white"
                btnTextColor="mediumvioletred"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 7:
        return (
          <View>
            <Text style={styles.stepText}>
              Payment has been sent to the Traveler
            </Text>
          </View>
        );
      default:
        return <Text style={{ fontSize: 20, color: '#e91e63' }}>complete</Text>;
    }
  };

  const travelerStepSwitch = () => {
    switch (true) {
      case currentStep === 0:
        return (
          <View>
            <Text style={styles.stepText}>
              Your request to Travel with this item has been submitted
            </Text>
          </View>
        );
      case currentStep === 1:
        return (
          <View>
            <Text style={styles.stepText}>
              Your request has been accepted and the item will be shipped to you
              before your trip
            </Text>
          </View>
        );
      case currentStep === 2:
        return (
          <View>
            <View>
              <Text style={styles.stepText}>
                The item has been shipped to you. Please confirm you received
                the item when it arrives
              </Text>
            </View>

            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Confirm Item"
                onPressHandler={() => {
                  console.log('Confirm Item');
                  updateStep(3);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 3:
        return (
          <View>
            <View>
              <Text style={styles.stepText}>
                Please confirm when you are on your way to your destination
              </Text>
            </View>

            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="On your way!"
                onPressHandler={() => {
                  console.log('on your way');
                  updateStep(4);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 4:
        return (
          <View>
            <View>
              <Text style={styles.stepText}>
                Please confirm when you have delivered the item
              </Text>
            </View>

            <View style={styles.stepButton}>
              <WideButton
                disabled={false}
                buttonText="Item Delivered"
                onPressHandler={() => {
                  console.log('Confirm Item');
                  updateStep(5);
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        );
      case currentStep === 5:
        return (
          <View>
            <Text style={styles.stepText}>
              Waiting on the Receiver to confirm they received the item
            </Text>
          </View>
        );
      case currentStep === 6:
        return (
          <View>
            <Text style={styles.stepText}>
              Waiting on the Receiver to confirm the item
            </Text>
          </View>
        );
      case currentStep === 7:
        return (
          <View>
            <Text style={styles.stepText}>Payment has been sent to you</Text>
          </View>
        );
      default:
        return <Text style={{ fontSize: 20, color: '#e91e63' }}>complete</Text>;
    }
  };

  useEffect(() => {
    setDate(getDate());
    if (currentStep === 8) {
      setStepsDone(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Current Status</Text>
      </View>
      <View>
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <View
            style={{
              marginRight: 10,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {currentStep === 0 && (
              <MaterialCIcon name="account-search" size={25} color="#e91e63" />
            )}
            {currentStep === 1 && (
              <MaterialCIcon name="truck" size={25} color="#e91e63" />
            )}
            {currentStep === 2 && (
              <MaterialCIcon name="account-check" size={25} color="#e91e63" />
            )}
            {currentStep === 3 && (
              <MaterialCIcon
                name="airplane-takeoff"
                size={25}
                color="#e91e63"
              />
            )}
            {currentStep === 4 && (
              <MaterialCIcon name="check" size={25} color="#e91e63" />
            )}
            {currentStep === 5 && (
              <MaterialCIcon name="check-all" size={25} color="#e91e63" />
            )}
            {currentStep === 6 && (
              <MaterialCIcon name="clipboard-check" size={25} color="#e91e63" />
            )}
            {currentStep === 7 && (
              <MaterialCIcon
                name="currency-usd-circle"
                size={25}
                color="#e91e63"
              />
            )}
          </View>
          <View>
            <Text style={{ fontSize: 20, color: '#e91e63' }}>
              {currentStep <= 7
                ? stepNames.data[currentStep].title
                : 'complete'}
            </Text>
          </View>
        </View>
      </View>
      <View>{isOwner ? ownerStepSwitch() : travelerStepSwitch()}</View>
    </View>
  );
};
export default JobStatusComponent;
