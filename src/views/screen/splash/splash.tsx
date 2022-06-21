import {View, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {pushHomeScreen} from 'navigators';
import {tailwind} from 'tailwind';
import {CZoomIcon} from 'src/views/shared';

const Splash = () => {
  const fadeAnimation = new Animated.Value(0);
  const iconAnimation = useRef(new Animated.Value(0)).current;

  const iconAnimationSequence = () => {
    Animated.sequence([
      Animated.spring(iconAnimation, {
        toValue: 2,
        useNativeDriver: true,
      }),
    ]);
  };

  useEffect(() => {
    navigate();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const navigate = () => {
    fadeIn();
    // setTimeout(() => iconAnimationSequence(), 100);
    // fadeOut();
    setTimeout(() => pushHomeScreen(), 3000);
  };

  return (
    <View
      style={tailwind('w-full h-full items-center justify-center bg-black')}>
      <CZoomIcon
        source={require('../../../assets/img/app-icon.png')}
        height={80}
        width={80}
        zoomValue={20}
        delay={120}
      />
    </View>
  );
};

export default Splash;
