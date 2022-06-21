/**
 * @format
 */

import {pushSplashScreen} from 'navigators';
import {Navigation} from 'react-native-navigation';
import {HomeScreen} from 'screens';

// Navigation.registerComponent('com.myApp.WelcomeScreen', () => HomeScreen);
Navigation.events().registerAppLaunchedListener(() => pushSplashScreen());
