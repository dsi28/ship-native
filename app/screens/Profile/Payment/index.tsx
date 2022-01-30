import {
  StripeProvider as _StripeProvider,
  useStripe
} from '@stripe/stripe-react-native';
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { Screen } from 'react-native-screens';
import styles from './styles';

const API_URL = 'http://localhost:3000';
// temp2

const CheckoutScreen: React.FC = () => {
  console.log('1');
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    console.log(4);
    try {
      const response = await fetch(`${API_URL}/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('4a1');
      const { paymentIntent, ephemeralKey, customer } = await response.json();
      // const temp = await response.text();
      // console.log(temp);
      console.log('4a');
      return {
        paymentIntent,
        ephemeralKey,
        customer
      };

      // return {
      //   paymentIntent: '',
      //   ephemeralKey: '',
      //   customer: ''
      // };
    } catch (error) {
      console.log('4b');

      console.log(error);
      return {
        paymentIntent: '',
        ephemeralKey: '',
        customer: ''
      };
    }
  };

  const initializePaymentSheet = async () => {
    console.log(3);
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
    console.log('2');
    initializePaymentSheet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.log(`Error code: ${error.code}`, error.message);
    } else {
      console.log('Success', 'Your order is confirmed!');
    }
  };

  return (
    <Screen>
      <Button
        // variant="primary"
        disabled={!loading}
        title="Checkout"
        onPress={openPaymentSheet}
      />
    </Screen>
  );
};

interface ProfilePaymentProps {
  userProfile?: any; // remove ? when we pass user here
}

const ProfilePayment: React.FC<ProfilePaymentProps> = () => {
  const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;
  const stripePk =
    'pk_test_51KKpsMKP4EEBArik9ZSTK7asxDDTyju3EtlxR33ohAYzzrWUUawBQ0xACnsdp5ZqTcTWasVth0pJuEu5jEmHaajM00ert56ba7';

  return (
    <StripeProvider
      publishableKey={stripePk}
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <View style={styles.container}>
        <Text>Payment yo</Text>
        {/* <StripeTest /> */}
        <CheckoutScreen />
      </View>
    </StripeProvider>
  );
};

export default ProfilePayment;
