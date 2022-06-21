import {Navigation} from 'react-native-navigation';
import {SCREENS} from 'screens';
import {registerScreens} from './register-sreen';
export {registerScreens} from './register-sreen';

registerScreens();

interface showOverlayProps {
  screen: string;
  options?: object;
  passProps?: object;
}

interface closeActionProp {
  componentId: string;
}

interface ToastProps {
  content: string;
  componentId: string;
}

export const pushSplashScreen = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: SCREENS.SPLASHSCREEN,
        options: {
          topBar: {
            visible: false,
          },
          statusBar: {
            translucent: true,
            drawBehind: true,
            style: 'light',
          },
          animations: undefined,
        },
      },
    },
  });
};

export const pushHomeScreen = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'HOME_STACK',
        children: [
          {
            component: {
              name: SCREENS.HOMESCREEN,
              id: 'HOME',
              options: {
                topBar: {
                  visible: false,
                },
                animations: {
                  setRoot: {
                    alpha: {
                      from: 0.6,
                      to: 1,
                      duration: 200,
                    },
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
};

export const pushToPlay = (componentId: string) => {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        name: SCREENS.HOMESCREEN,
        id: 'HOME',
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            setRoot: {
              alpha: {
                from: 0.6,
                to: 1,
                duration: 200,
              },
            },
          },
        },
      },
    },
    {
      component: {
        name: SCREENS.PLAYSCREEN,
        options: {
          topBar: {
            visible: false,
          },
          animations: undefined,
        },
      },
    },
  ]);
};

export const pushToStatistics = (componentId: string) => {
  Navigation.setStackRoot(componentId, [
    {
      component: {
        name: SCREENS.HOMESCREEN,
        id: 'HOME',
        options: {
          topBar: {
            visible: false,
          },
          animations: {
            setRoot: {
              alpha: {
                from: 0.6,
                to: 1,
                duration: 200,
              },
            },
          },
        },
      },
    },
    {
      component: {
        name: SCREENS.STATISTICSCREEN,
        options: {
          topBar: {
            visible: false,
          },
          animations: undefined,
        },
      },
    },
  ]);
};

export const showOverlay = (props: showOverlayProps) => {
  const {screen, options = {}, passProps = {}} = props;
  Navigation.showOverlay({
    component: {
      name: screen,
      passProps: passProps,
      options: {
        statusBar: {
          translucent: true,
          drawBehind: true,
          // style: 'light',
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
        overlay: {
          interceptTouchOutside: true,
        },
        ...options,
      },
    },
  });
};

export const showToast = (props: ToastProps) => {
  const {content, componentId} = props;
  Navigation.showOverlay({
    component: {
      name: SCREENS.TOAST,
      passProps: {
        content: content,
        componentId: componentId,
      },
      options: {
        statusBar: {
          translucent: false,
        },
        layout: {
          componentBackgroundColor: 'transparent',
        },
        overlay: {
          interceptTouchOutside: false,
        },
      },
    },
  });
};

export const dismissOverlay = (props: closeActionProp) => {
  const {componentId} = props;
  Navigation.dismissOverlay(componentId);
};
