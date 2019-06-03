// screens/stack.js

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './splash';
import AuthScreen from './auth/index';

const switchNavigator = createSwitchNavigator(
  {
    splash: {
      screen: SplashScreen,
    },
    auth: {
      screen: AuthScreen,
    },
  },
  {
    initialRouteName: 'splash',
  },
);

export default createAppContainer(switchNavigator);