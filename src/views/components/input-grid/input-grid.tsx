import {View, StyleSheet} from 'react-native';
import React from 'react';
import {InputRow} from '../input-row';

interface InputGridProps {
  wordLength: number;
  rowsCount: number;
  newInput: {
    value: string;
    pressCount: number;
  };
  activeRow: number;
  fontSize: number;
  rowResult: (1 | 0 | 2)[];
  target: string;
}

const InputGrid = ({
  wordLength,
  rowsCount,
  activeRow,
  fontSize,
  newInput,
  rowResult,
  target,
}: InputGridProps) => {
  return (
    <View style={styles.box}>
      {Array.apply(null, Array(rowsCount)).map((_, indx) => {
        return (
          <InputRow
            isActive={indx === activeRow}
            wordCount={wordLength}
            fontSize={fontSize}
            newInput={newInput}
            applyResult={indx === activeRow - 1}
            rowResult={rowResult}
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
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InputGrid;
