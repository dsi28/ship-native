import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ImagePropertyComponent from '../imageProperty';
import JobPropertyComponent from '../property';
import styles from './styles';

// interface JobDetailsProps {
//   curInput: any;
//   setCurInput: React.Dispatch<React.SetStateAction<string | undefined>>;
// }

const JobDetails: React.FC = () => {
  // @ts-ignore default does exsist not sure why this show up
  const userProfile = useSelector((state: AppState) => state.default);
  console.log(userProfile);
  return (
    <View>
      <View style={styles.itemDetailsContainer}>
        <View>
          <Text style={styles.detailsHeader}>Item Details</Text>
        </View>
        {/* TODO get real item detail values */}
        <JobPropertyComponent title="Item Name" value="Alphonso Mangoes" />
        <JobPropertyComponent title="Item Category" value="Food" />
        <JobPropertyComponent
          title="Item Delivery Date"
          value="January 27, 2021"
        />
        <JobPropertyComponent
          title="Delivery Location"
          value="Miami, Florida, 33130, United States"
        />
        <JobPropertyComponent title="Item Weight" value="Around 5-20 lbs" />
        <JobPropertyComponent
          title="Item Size"
          value="Large, Needs to be shipped in the cargo area"
        />
        <JobPropertyComponent
          title="Notes from Owner"
          value="These are the owners notes. Please read these notes. Thank you for reading these notes."
        />
        <ImagePropertyComponent
          title="Item Images"
          value={[
            '../../../assets/images/mango.jpg',
            '../../../assets/images/mango.jpg'
          ]}
        />
      </View>
      <View style={styles.receiverContainer}>
        <View style={styles.receiverHeaderContainer}>
          <Text style={styles.receiverHeader}>Receiver Details</Text>
        </View>
        <JobPropertyComponent title="Name" value="Alice Chaser" />
        <JobPropertyComponent title="Email" value="achaser@email.com" />
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>
          Traveler will be paid on delivery
        </Text>
        <Text style={styles.paymentAmount}>$60</Text>
      </View>
    </View>
  );
};
export default JobDetails;
