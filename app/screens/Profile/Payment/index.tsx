// import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface ProfilePaymentProps {
  userProfile?: any; // remove ? when we pass user here
}

const ProfilePayment: React.FC<ProfilePaymentProps> = () => (
  // @ts-ignore
  // const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>;

  // <StripeProvider
  //   publishableKey="pk_test_51KKpsMKP4EEBArik9ZSTK7asxDDTyju3EtlxR33ohAYzzrWUUawBQ0xACnsdp5ZqTcTWasVth0pJuEu5jEmHaajM00ert56ba7"
  //   urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
  //   merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
  // >
  <View style={styles.container}>
    <Text>Payment yo</Text>
  </View>
  // </StripeProvider> */}
);
export default ProfilePayment;
