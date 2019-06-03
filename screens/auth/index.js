// screens/auth/index.js
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './login';
import RegisterScreen from './register';

const authNaviagator = createStackNavigator(
  {
    login: {
      screen: LoginScreen,
    },
    register: {
      screen: RegisterScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  });

const app = createAppContainer(authNaviagator);

export default app;