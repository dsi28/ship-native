import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistCombineReducers, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducers from '../reducers'; // where reducers is a object of reducers

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true // to get useful logging
};

const middleware = [];
middleware.push(thunk);

if (__DEV__) {
  middleware.push(createLogger());
}

// @ts-ignore
const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig: any = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   console.log('Test', store.getState());
});

export { store, persistor };

export type AppState = ReturnType<typeof reducers>;
