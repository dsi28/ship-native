import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { INewJob } from '../../../models/IJob';
import ImagePropertyComponent from '../imageProperty';
import JobPropertyComponent from '../property';
import styles from './styles';

interface JobDetailsProps {
  job: INewJob;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  const [dateTemp, setDateTemp] = useState('');
  const getDate = (): string => {
    if (job?.itemDeliveryDate !== undefined) {
      if (
        typeof job?.itemDeliveryDate === 'object' &&
        // @ts-ignore
        typeof job?.itemDeliveryDate.toDate() !== 'undefined'
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
    setDateTemp(getDate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <View style={styles.itemDetailsContainer}>
        <View>
          <Text style={styles.detailsHeader}>Item Details</Text>
        </View>
        <JobPropertyComponent
          title="Item Name"
          value={job.itemName || 'item name not set'}
        />
        <JobPropertyComponent
          title="Item Category"
          value={job.itemCategory || 'item category not set'}
        />
        <JobPropertyComponent
          title="Item Delivery Date"
          // @ts-ignore
          value={dateTemp}
          // value="test"
        />
        <JobPropertyComponent
          title="Delivery Location"
          value={job.itemDeliveryLocation || 'item delivery location not set'}
        />
        <JobPropertyComponent
          title="Item Weight"
          value={job.itemWeight?.weight.text || 'item weight not set'}
        />
        <JobPropertyComponent
          title="Item Size"
          value={job.itemSize || 'item size not set'}
        />
        <JobPropertyComponent
          title="Notes from Owner"
          value={job.note || 'item note not set'}
        />
        <ImagePropertyComponent title="Item Images" value={job.itemImages} />
      </View>
      <View style={styles.receiverContainer}>
        <View style={styles.receiverHeaderContainer}>
          <Text style={styles.receiverHeader}>Receiver Details</Text>
        </View>
        <JobPropertyComponent
          title="Name"
          value={job.itemReceiver?.name || 'receiver name not set'}
        />
        <JobPropertyComponent
          title="Email"
          value={job.itemReceiver?.email || 'receiver email not set'}
        />
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>
          Traveler will be paid on delivery
        </Text>
        <Text style={styles.paymentAmount}>
          {job.shipmentCost || 'cost not set'}
        </Text>
      </View>
    </View>
  );
};
export default JobDetails;
