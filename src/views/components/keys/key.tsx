/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {KeyColors} from 'src/constants';
import {tailwind} from 'tailwind';
import {useAppSelector} from 'src/state/store';
import keyboard from 'src/state/ducks/keyboard';
import {useEffect, useState} from 'react';
import words from 'src/state/ducks/words';
import {getUsedKeyBg} from 'src/helper';
const {selectTargetFiveLetterWord} = words;
const {selectGusses, selectUsedLetters} = keyboard;

interface KeyProps {
  value: string;
  state: 'unused' | 'correct' | 'misplaced' | 'absent';
  onPress: Function;
}

const Key = ({state, value, onPress}: KeyProps) => {
  const gusses: Array<string> = useAppSelector(selectGusses);
  const usedLetters: Array<string> = useAppSelector(selectUsedLetters);
  const target: string = useAppSelector(selectTargetFiveLetterWord);
  const [bgColor, setBgColor] = useState(KeyColors.normal);

  useEffect(() => {
    setBgColor(KeyColors.normal);
  }, []);

  useEffect(() => {
    setBgColor(KeyColors.normal);
  }, [target]);

  useEffect(() => {
    const bg = getKeyBackground({
      value: value,
      target: target,
      gusses: gusses,
      usedLetters,
    });

    setBgColor(bg);
  }, [usedLetters, gusses]);

  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      style={[
        {
          backgroundColor: bgColor,
        },
        tailwind('flex-1 py-4 key-borderRadius key-margin'),
      ]}>
      <View style={tailwind('items-center justify-center flex-row w-full')}>
        <Text style={[tailwind('font-semibold'), {color: KeyColors.text}]}>
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const getKeyBackground = ({
  value,
  target,
  gusses,
  usedLetters,
}: {
  value: string;
  usedLetters: Array<string>;
  gusses: Array<string>;
  target: string;
}) => {
  if (!usedLetters.includes(value)) {
    return KeyColors.normal;
  } else {
    return getUsedKeyBg({value: value, target: target, guesses: gusses});
  }
};
export default Key;
