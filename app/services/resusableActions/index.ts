/* eslint-disable import/prefer-default-export */

import { Linking } from 'react-native';
import 'react-native-get-random-values';

export const supportEmail = (
  jobId: string,
  isOwner: boolean,
  currentStep: number
) => {
  Linking.openURL(
    `mailto:support@juduh.com?subject=Contact Support&body=Job:${jobId}\nOwner:${isOwner}\nStep:${currentStep}\nEnter the description here:`
  );
};
