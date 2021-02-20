import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import 'react-native-gesture-handler';
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import RootNavigator from './navigation/RootNavigation';
import { persistor, store } from './redux/store/configureStore';

// TODO:implment react-native-vector-icons ios

interface EntryPointProps {}

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333'
  }
};

const RootNavigation: React.FC = () => {
  const combinedTheme = CustomDefaultTheme;
  // console.log(CustomDefaultTheme);

  return (
    // @ts-ignore
    <PaperProvider theme={combinedTheme}>
      <RootNavigator theme={combinedTheme} />
    </PaperProvider>
  );
};

const EntryPoint: React.FC<EntryPointProps> = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
);
export default EntryPoint;
