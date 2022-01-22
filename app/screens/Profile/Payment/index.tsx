import {
  CardField,
  StripeProvider as _StripeProvider,
  useStripe
} from '@stripe/stripe-react-native';
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import styles from './styles';

/// temp

const StripeTest: React.FC = () => {
  const { confirmPayment } = useStripe();

  const [key, setKey] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/create-payment-intent', {
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('intent', res);
        setKey((res as { clientSecret: string }).clientSecret);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleConfirmation = async () => {
    if (key) {
      const { paymentIntent, error } = await confirmPayment(key, {
        type: 'Card',
        billingDetails: {
          email: 'John@email.com'
        }
      });

      if (!error) {
        console.log('Received payment', `Billed for ${paymentIntent?.amount}`);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242'
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000'
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30
        }}
        onCardChange={(cardDetails) => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log('focusField', focusedField);
        }}
      />
      <Button title="Confirm payment" onPress={handleConfirmation} />
    </View>
  );
};

/// end temp

interface ProfilePaymentProps {
  userProfile?: any; // remove ? when we pass user here
}

const ProfilePayment: React.FC<ProfilePaymentProps> = () => {
  const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;

  return (
    <StripeProvider
      publishableKey="pk_test_51KKpsMKP4EEBArik9ZSTK7asxDDTyju3EtlxR33ohAYzzrWUUawBQ0xACnsdp5ZqTcTWasVth0pJuEu5jEmHaajM00ert56ba7"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <View style={styles.container}>
        <Text>Payment yo</Text>
        <StripeTest />
      </View>
    </StripeProvider>
  );
};

export default ProfilePayment;
