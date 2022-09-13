/* eslint-disable import/prefer-default-export */

import { Linking } from 'react-native';
import 'react-native-get-random-values';

export const supportEmail = (
  jobId: string,
  isOwner: boolean,
  currentStep: number
) => {
  Linking.openURL(
    `mailto:shipapp225@gmail.com?subject=Contact Support&body=Job:${jobId}\nOwner:${isOwner}\nStep:${currentStep}\nEnter the description here:`
  );
};

export const supportEmailGeneral = (about: string) => {
  Linking.openURL(
    `mailto:shipapp225@gmail.com?subject=Contact Support: ${about}&body=\nEnter the description here:`
  );
};
