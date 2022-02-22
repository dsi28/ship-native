import {
  StripeProvider as _StripeProvider,
  useStripe
} from '@stripe/stripe-react-native';
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import WideButton from '../../../components/buttons/WideButton';
import JobDetails from '../../../components/job/Details';
import JobPropertyComponent from '../../../components/job/property';
import TravelerHeaderComponent from '../../../components/Traveler/Header';
import NavigationService from '../../../navigation/NavigationService';
import { setCurStepJobs } from '../../../redux/actions/job';
import { AppState } from '../../../redux/store/configureStore';
import {
  acceptTravelerRequests,
  updateJobStatus
} from '../../../services/jobs';
import { paymentSheetAPI } from '../../../services/payment';
import styles from './styles';

const STRIPE_PK =
  'pk_test_51KKpsMKP4EEBArik9ZSTK7asxDDTyju3EtlxR33ohAYzzrWUUawBQ0xACnsdp5ZqTcTWasVth0pJuEu5jEmHaajM00ert56ba7';

NavigationService.navigate('Traveler Requests');

interface AcceptTravelerProps {
  route: any;
}

const AcceptTravler: React.FC<AcceptTravelerProps> = ({ route }) => {
  const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);
  const ownerJobs = useSelector((state: AppState) => state.job.ownerJobs);

  const { job, traveler, trip } = route.params;

  const dispatch = useDispatch();

  // stripe functions start

  const fetchPaymentSheetParams = async () => {
    const paymentSheetDetails = await paymentSheetAPI();
    return paymentSheetDetails;
  };

  const initializePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      publishableKey
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      // methods that complete payment after a delay, like SEPA Debit and Sofort.
      // allowsDelayedPaymentMethods: true
    });
    if (!error) {
      setLoading(true);
    }
  };

  useEffect(() => {
    initializePaymentSheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      // update traveler request status when payment is successful
      acceptTravelerRequests(traveler.uid, job.uid);

      // update job status - sets job currentStatus
      updateJobStatus(job, 1);

      // update job state - curStatus, status, travelerRequests[].status
      dispatch(
        setCurStepJobs({
          jobId: job.uid,
          currentStatus: 1,
          isOwner: true,
          // @ts-ignore
          jobs: ownerJobs
        })
      );

      console.log('Success', 'Your order is confirmed!', job.currentStatus);

      NavigationService.navigate('Job');
    }
  };

  // stripe functions end

  return (
    // @ts-ignore default does exsist not sure why this show up
    // const userProfile = useSelector((state: AppState) => state.default);
    <StripeProvider
      publishableKey={STRIPE_PK}
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <ScrollView style={styles.container}>
        <View style={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.travlerContainer}>
              <TravelerHeaderComponent
                name={traveler.name}
                review="4.5 (4)"
                image={traveler?.pictures}
              />
            </View>

            <View>
              <JobPropertyComponent
                title="Flying on"
                value={
                  typeof trip.date?.seconds === 'number'
                    ? dayjs
                        // @ts-ignore
                        .unix(trip.date?.seconds)
                        .format('MMMM DD, YYYY')
                    : dayjs(
                        // @ts-ignore
                        trip.date
                      ).format('MMMM DD YYYY')
                }
              />
              <JobPropertyComponent
                title="Flying to"
                value={trip.arrivalCity}
              />
            </View>
          </View>
          <View style={styles.jobDetailsContainer}>
            <JobDetails job={job} />
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <WideButton
                disabled={!loading}
                buttonText="Payment"
                onPressHandler={() => {
                  console.log('Payment');
                  // add stripe services call
                  openPaymentSheet();
                }}
                isSelected
                btnBackgoundColor="mediumvioletred"
                btnTextColor="white"
                btnBorderColor="mediumvioletred"
              />
            </View>
            <View>
              <WideButton
                buttonText="Cancel"
                onPressHandler={() => {
                  console.log('cancel');
                  NavigationService.navigate('Traveler Requests');
                }}
                isSelected
                btnBackgoundColor="white"
                btnTextColor="mediumvioletred"
                btnBorderColor="mediumvioletred"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </StripeProvider>
  );
};
export default AcceptTravler;
