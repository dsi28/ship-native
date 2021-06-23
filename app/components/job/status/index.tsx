import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MaterialCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { IJob } from '../../../models/IJob';
import JobPropertyComponent from '../property';

interface JobStatusComponentProps {
  stepNames: {
    data: {
      title: string;
    }[];
  };
  job: IJob;
  currentStep: number;
}

const JobStatusComponent: React.FC<JobStatusComponentProps> = ({
  stepNames,
  job,
  currentStep
}) => {
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

  // const showDeliveryProperties = () =>{
  //   return
  // }

  useEffect(() => {
    setDate(getDate());
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
              {stepNames.data[currentStep].title}
            </Text>
          </View>
        </View>
      </View>

      <View>
        {currentStep === 0 && (
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
        )}
        {currentStep === 0 && (
          <View>
            <Text style={{ textAlign: 'center', fontSize: 20, color: 'gray' }}>
              Deliver the package to the traveler 1 day before the flight date
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default JobStatusComponent;
