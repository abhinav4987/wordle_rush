import {Animated, ImageSourcePropType} from 'react-native';
import React, {useRef, useEffect} from 'react';

interface CSpringIconProps {
  delay: number;
  source: ImageSourcePropType;
  height: number;
  width: number;
  zoomValue: number;
}

const CSpringIcon = ({
  delay = 0,
  source,
  height,
  width,
  zoomValue,
}: CSpringIconProps) => {
  const heightRef = useRef(new Animated.Value(height)).current;
  const widthRef = useRef(new Animated.Value(width)).current;

  useEffect(() => {
    if (delay) {
      setTimeout(() => {
        Animated.timing(widthRef, {
          toValue: width + zoomValue,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        Animated.timing(heightRef, {
          toValue: height + zoomValue,
          duration: 1000,
          useNativeDriver: false,
        }).start();
      }, delay);
    } else {
      Animated.timing(widthRef, {
        toValue: width + zoomValue,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(heightRef, {
        toValue: height + zoomValue,
        duration: 10000,
        useNativeDriver: false,
      }).start();
    }
  }, []);

  return (
    <Animated.Image
      source={source}
      style={{
        width: widthRef,
        height: heightRef,
      }}
    />
  );
};

export default CSpringIcon;
