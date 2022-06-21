import {View, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Key, ActionKey} from '../';
import KeyboardDuck from 'src/state/ducks/keyboard';
import {dispatch} from 'src/state/store';
import {useEffect} from 'react';
import {InputBox} from '../input-box';

const initalPressState: ('unused' | 'correct' | 'misplaced' | 'absent')[] = [
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
  'unused',
];

const Keyboard = ({
  target,
  newRowInput,
  wordLength,
}: {
  target: string;
  newRowInput: string;
  wordLength: number;
}) => {
  const [pressCount, setPressCount] = useState(0);
  const [pressState, setPressState] = useState(initalPressState);
  const {setNewInput} = KeyboardDuck;
  const onPress = (value: string) => {
    setPressCount(pressCount + 1);
    dispatch(
      setNewInput({
        pressCount: pressCount + 1,
        value: value,
      }),
    );
  };
  const updatePresStateAtIndex = (
    index: number,
    value: 'unused' | 'correct' | 'misplaced' | 'absent',
  ) => {
    setPressState([
      ...pressState.slice(0, index),
      value,
      ...pressState.slice(index),
    ]);
  };
  const setNewPressState = () => {
    const targetArray = target.split('');
    for (let i = 0; i < newRowInput.length; i++) {
      if (targetArray.includes(newRowInput.toLowerCase()[i])) {
        if (targetArray[i] === newRowInput.toLowerCase()[i]) {
          updatePresStateAtIndex(
            newRowInput[i].charCodeAt(0) - 'A'.charCodeAt(0),
            'correct',
          );
        } else {
          updatePresStateAtIndex(
            newRowInput[i].charCodeAt(0) - 'A'.charCodeAt(0),
            'misplaced',
          );
        }
      } else {
        updatePresStateAtIndex(
          newRowInput[i].charCodeAt(0) - 'A'.charCodeAt(0),
          'absent',
        );
      }
    }
  };

  return (
    <View style={[styles.box]}>
      {/* firts row */}
      <View style={styles.buttonRow}>
        <Key value="Q" state={pressState[0]} onPress={onPress} />
        <Key value="W" state={pressState[1]} onPress={onPress} />
        <Key value="E" state={pressState[2]} onPress={onPress} />
        <Key value="R" state={pressState[3]} onPress={onPress} />
        <Key value="T" state={pressState[4]} onPress={onPress} />
        <Key value="Y" state={pressState[5]} onPress={onPress} />
        <Key value="U" state={pressState[6]} onPress={onPress} />
        <Key value="I" state={pressState[7]} onPress={onPress} />
        <Key value="O" state={pressState[8]} onPress={onPress} />
        <Key value="P" state={pressState[9]} onPress={onPress} />
      </View>
      <View
        style={[
          styles.buttonRow,
          {paddingHorizontal: (Dimensions.get('screen').width - 5) / 20},
        ]}>
        <Key value="A" state={pressState[10]} onPress={onPress} />
        <Key value="S" state={pressState[11]} onPress={onPress} />
        <Key value="D" state={pressState[12]} onPress={onPress} />
        <Key value="F" state={pressState[13]} onPress={onPress} />
        <Key value="G" state={pressState[14]} onPress={onPress} />
        <Key value="H" state={pressState[15]} onPress={onPress} />
        <Key value="J" state={pressState[16]} onPress={onPress} />
        <Key value="K" state={pressState[17]} onPress={onPress} />
        <Key value="L" state={pressState[19]} onPress={onPress} />
      </View>
      <View style={styles.buttonRow}>
        <ActionKey label="ENTER" onPress={onPress} />
        <Key value="Z" state={pressState[20]} onPress={onPress} />
        <Key value="X" state={pressState[21]} onPress={onPress} />
        <Key value="C" state={pressState[22]} onPress={onPress} />
        <Key value="V" state={pressState[23]} onPress={onPress} />
        <Key value="B" state={pressState[24]} onPress={onPress} />
        <Key value="N" state={pressState[25]} onPress={onPress} />
        <Key value="M" state={pressState[26]} onPress={onPress} />
        <ActionKey label="DEL" onPress={onPress} />
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstRow: {flexDirection: 'row'},
  secondRow: {flexDirection: 'row'},
  thirdRow: {flexDirection: 'row'},
});
export default Keyboard;
