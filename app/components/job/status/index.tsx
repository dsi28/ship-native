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
  const [showNote, setShowNote] = useState(false);
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

  const getStepDetails = () => {
    switch (currentStep) {
      case 0:
        setShowNote(true);
        break;
      case 1:
        setShowNote(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setDate(getDate());
    getStepDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Current Status</Text>
      </View>
      <View style={{ flexDirection: 'row', marginBottom: 30 }}>
        <View
          style={{
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MaterialCIcon name="truck" size={25} color="#e91e63" />
        </View>
        <View>
          <Text style={{ fontSize: 20, color: '#e91e63' }}>
            {stepNames.data[0].title}
          </Text>
        </View>
      </View>
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

        {showNote && (
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
