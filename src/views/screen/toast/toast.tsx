import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {tailwind} from 'tailwind';
import {useEffect} from 'react';
import {dismissOverlay} from 'src/navigators';

const Toast = ({
  content,
  componentId,
}: {
  content: string;
  componentId: string;
}) => {
  useEffect(() => {
    setTimeout(() => {
      dismissOverlay({componentId: componentId});
    }, 2000);
  }, []);
  return (
    <View style={[tailwind(' absolute  '), style.box]}>
      <View style={[tailwind('absolute bg-929292 px-4 py-1 rounded')]}>
        <Text style={tailwind(' text-base text-white')}>{content}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  box: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
});
export default Toast;
