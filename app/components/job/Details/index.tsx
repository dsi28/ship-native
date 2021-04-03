import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { IJob } from '../../../models/IJob';
import ImagePropertyComponent from '../imageProperty';
import JobPropertyComponent from '../property';
import styles from './styles';

interface JobDetailsProps {
  job: IJob;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
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
          value={
            // eslint-disable-next-line no-nested-ternary
            typeof job?.itemDeliveryDate !== undefined
              ? typeof job?.itemDeliveryDate === 'object'
                ? job?.itemDeliveryDate.toDateString() // newJob.itemDeliveryDate?.toDateString()
                : new Date(job?.itemDeliveryDate).toDateString() // this is a mess
              : 'Delivery date not set' // 'set date'
          }
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
          value={
            typeof job.itemSize !== undefined
              ? // @ts-ignore
                job.itemSize.charAt(0).toUpperCase() + job.itemSize.slice(1)
              : 'item size not set'
          }
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
