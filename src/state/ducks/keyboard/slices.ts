import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Input {
  value: string;
  pressCount: number;
}

interface INITALSTATEtype {
  input: Input;
  guesses: Array<string>;
  usedLetters: Array<string>;
}

const initialState: INITALSTATEtype = {
  input: {
    value: '',
    pressCount: 0,
  },
  guesses: [],
  usedLetters: [],
};

const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    setNewInput: (state, action: PayloadAction<Input>) => {
      const {payload} = action;
      state.input = payload;
    },
    addToGuesses: (state, action: PayloadAction<string>) => {
      const {payload} = action;
      state.guesses.push(payload);
    },
    addToUsedLetters: (state, action: PayloadAction<string>) => {
      const {payload} = action;
      const letters = payload.split('');
      letters.forEach(letter => {
        state.usedLetters.push(letter);
      });
    },
    clearKeyBoard: state => {
      state.guesses = [];
      state.usedLetters = [];
    },
  },
});

export default keyboardSlice;
