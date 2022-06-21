/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {InputBox} from '../';

interface InputRowProps {
  wordCount: number;
  isActive: boolean;
  fontSize: number;
  newInput: {
    value: string;
    pressCount: number;
  };
  applyResult: boolean;
  rowResult: (1 | 0 | 2)[];
  target: string;
}

const InputRow = ({
  wordCount,
  isActive,
  fontSize,
  newInput,
  applyResult,
  rowResult,
  target,
}: InputRowProps) => {
  const [activeColumn, setActiveColumn] = useState(0);
  const [keyBackgrounds, setKeyBackgrounds] = useState(
    Array(wordCount).fill(-1),
  );
  const [newKeyBoardInput, setNewKeyBoardInput] = useState<{
    value: string;
    pressCount: number;
  }>(newInput);

  const handleNextActiveColumn = ({type}: {type: 'forward' | 'backward'}) => {
    if (type === 'forward' && activeColumn < wordCount) {
      setActiveColumn(activeColumn + 1);
    } else if (type === 'backward' && activeColumn > 0) {
      setActiveColumn(activeColumn - 1);
    }
  };
  useEffect(() => {
    if (newInput.value === 'DEL' && activeColumn > 0) {
      setActiveColumn(activeColumn - 1);
    }
    setNewKeyBoardInput(newInput);
  }, [newInput]);
  useEffect(() => {
    setActiveColumn(0);
    setKeyBackgrounds(Array(wordCount).fill(-1));
  }, [target]);
  useEffect(() => {
    if (applyResult) {
      setKeyBackgrounds(rowResult);
    }
  }, [applyResult]);
  return (
    <View style={styles.box}>
      {Array.apply(null, Array(wordCount)).map((_, indx) => {
        return (
          <InputBox
            fontSize={fontSize}
            key={indx}
            doChange={isActive && activeColumn === indx}
            newInput={newKeyBoardInput}
            setActiveColumn={handleNextActiveColumn}
            keyBackgroundType={keyBackgrounds[indx]}
            target={target}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputRow;
