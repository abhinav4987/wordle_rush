import {FC} from 'react';
import {Navigation} from 'react-native-navigation';
import {
  PlayScreen,
  HomeScreen,
  SettingsScreen,
  SCREENS,
  SplashScreen,
  ResultScreen,
  StatisticScreen,
  Toast,
} from 'src/views/screen';
import {WrappedComponent} from './register-utils';

const wrap = (component: FC<any>) => {
  return WrappedComponent(component);
};

export const registerScreens = () => {
  Navigation.registerComponent(SCREENS.HOMESCREEN, () => wrap(HomeScreen));
  Navigation.registerComponent(SCREENS.SETTINGSSCREEN, () =>
    wrap(SettingsScreen),
  );
  Navigation.registerComponent(SCREENS.TOAST, () => wrap(Toast));
  Navigation.registerComponent(SCREENS.PLAYSCREEN, () => wrap(PlayScreen));
  Navigation.registerComponent(SCREENS.SPLASHSCREEN, () => wrap(SplashScreen));
  Navigation.registerComponent(SCREENS.RESULTSCREEN, () => wrap(ResultScreen));
  Navigation.registerComponent(SCREENS.STATISTICSCREEN, () =>
    wrap(StatisticScreen),
  );
};
