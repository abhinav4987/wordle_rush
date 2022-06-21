/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyColors} from 'src/constants';

interface InputBoxProps {
  fontSize: number;
  newInput: {
    value: string;
    pressCount: number;
  };
  doChange: boolean;
  setActiveColumn: ({type}: {type: 'backward' | 'forward'}) => void;
  keyBackgroundType: number;
  target: string;
}

const InputBox = ({
  fontSize,
  newInput,
  setActiveColumn,
  doChange,
  keyBackgroundType,
  target,
}: InputBoxProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (doChange && newInput.value !== '' && newInput.value !== 'ENTER') {
      if (newInput.value === 'DEL') {
        setValue('');
      } else {
        setValue(newInput.value);
        setActiveColumn({type: 'forward'});
      }
    }
  }, [newInput]);
  useEffect(() => {
    setValue('');
  }, [target]);
  return (
    <View
      style={[
        styles.box,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderWidth: value ? 1.5 : 1.2,
          borderColor: getBorderColor(value, keyBackgroundType),
          backgroundColor: getBackgroundColor(keyBackgroundType),
        },
      ]}>
      <Text style={[styles.text, {fontSize: fontSize, color: KeyColors.text}]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 0,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '900',
    padding: 0,
    margin: 0,
    color: 'black',
  },
});

const getBorderColor = (value: string, bgType: number) => {
  if (value === '') {
    return KeyColors.border;
  } else {
    switch (bgType) {
      case 0:
        return '#3a3a3c';
      case 1:
        return '#538d4e';
      case 2:
        return '#b59f3b';
      default:
        return KeyColors.borderFilled;
    }
  }
};
const getBackgroundColor = (bgType: number) => {
  switch (bgType) {
    case 0:
      return '#3a3a3c';
    case 1:
      return '#538d4e';
    case 2:
      return '#b59f3b';
    default:
      return 'transparent';
  }
};

export default InputBox;
