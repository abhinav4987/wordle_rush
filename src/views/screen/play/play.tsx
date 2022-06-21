/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {tailwind} from 'tailwind';
import {Keyboard, InputGrid} from 'src/views/components';
import KeyboardDuck from 'src/state/ducks/keyboard';
import WordDuck from 'src/state/ducks/words';
import {dispatch, useAppSelector} from 'src/state/store';
import {useEffect} from 'react';
import {validaetFiveLetterWord, getRowResult} from 'src/helper';
import {showOverlay, showToast} from 'src/navigators';
import {SCREENS} from '../';
import results from 'src/state/ducks/results';
import keyboard from 'src/state/ducks/keyboard';

const {addToGuesses, addToUsedLetters, clearKeyBoard} = keyboard;
const {addToFiveLetterResult} = results;

const Play = ({componentId}: {componentId: string}) => {
  const [activeIndex, setAtiveIndex] = useState(0);
  const {width: viewportWidth} = Dimensions.get('screen');
  const [rowResult, setRowResult] = useState<(1 | 0 | 2)[]>([]);
  const [lastUsedRow, setLastUsedRow] = useState(-1);
  const [gameResult, setGameResult] = useState<Array<(1 | 0 | 2)[]>>([]);
  const [word, setWord] = useState('');
  const wordLength = 5;
  const rowsCount = 6;
  const {selectTargetFiveLetterWord, removeUsedWord} = WordDuck;
  const target: string = useAppSelector(selectTargetFiveLetterWord);
  const {selectInput} = KeyboardDuck;
  const input: {value: string; pressCount: number} =
    useAppSelector(selectInput);
  useEffect(() => {
    if (input.value === 'ENTER') {
      if (word.length < wordLength) {
        // throw not allowed action
      } else {
        // check if valid word
        if (validaetFiveLetterWord(word)) {
          const newRowResult = getRowResult(target, word.toLowerCase());
          setRowResult(newRowResult);
          dispatch(addToGuesses(word));
          dispatch(addToUsedLetters(word));
          setGameResult([...gameResult, newRowResult]);
        } else {
          showToast({content: 'INVALID WORD!', componentId: componentId});
        }
      }
    } else if (input.value === 'DEL') {
      setWord(word.slice(0, -1));
    } else {
      if (word.length < wordLength) {
        setWord(word + input.value);
      }
    }
  }, [input]);

  useEffect(() => {
    if (rowResult.length) {
      if (checkIfWin(rowResult)) {
        // lauch result screen
        setAtiveIndex(activeIndex + 1);
        dispatch(
          addToFiveLetterResult({
            solved: true,
            word: target,
            result: gameResult,
          }),
        );

        setTimeout(() => {
          showOverlay({
            screen: SCREENS.RESULTSCREEN,
            passProps: {
              target: target,
              solved: true,
            },
          });
        }, 1500);
        dispatch(removeUsedWord(target));
      } else {
        if (activeIndex === rowsCount - 1) {
          // lauch result screen
          setAtiveIndex(activeIndex + 1);
          dispatch(
            addToFiveLetterResult({
              solved: false,
              word: target,
              result: gameResult,
            }),
          );
          setTimeout(() => {
            showOverlay({
              screen: SCREENS.RESULTSCREEN,
              passProps: {
                target: target,
                solved: false,
              },
            });
          }, 1500);
          dispatch(removeUsedWord(target));
        } else {
          setWord('');
          setAtiveIndex(activeIndex + 1);
        }
      }
    }
  }, [rowResult]);

  useEffect(() => {
    setWord('');
    setGameResult([]);
    setAtiveIndex(0);
    setRowResult([]);
    dispatch(clearKeyBoard());
  }, [target]);

  useEffect(() => {
    return () => {
      dispatch(clearKeyBoard());
    };
  }, []);

  return (
    <View
      style={[
        tailwind('flex-col items-center justify-between h-full p-1 bg-black'),
        {width: viewportWidth},
      ]}>
      <InputGrid
        fontSize={(viewportWidth - 10) / 5 - 25}
        wordLength={wordLength}
        rowsCount={rowsCount}
        activeRow={activeIndex}
        newInput={input}
        rowResult={rowResult}
        target={target}
      />
      <Keyboard
        wordLength={wordLength}
        target={target}
        newRowInput={word.length < wordLength ? '' : word}
      />
    </View>
  );
};

const checkIfWin = (result: (1 | 0 | 2)[]) => {
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== 1) {
      return false;
    }
  }
  return true;
};
export default Play;
