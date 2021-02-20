import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';

// NavigationContainer is referred here - Check NavigationStack
export const navigationRef = React.createRef<NavigationContainerRef>();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function navigate(name: string, params?: any, stack?: any) {
  navigationRef.current?.navigate(name, params);
  // navigationRef.current?.navigate(stack, {screen: name, params});
}

function goBack() {
  navigationRef.current?.goBack();
}

export default {
  navigate,
  goBack
};
