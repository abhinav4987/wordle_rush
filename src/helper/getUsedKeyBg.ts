import {KeyColors} from 'src/constants';

export const getUsedKeyBg = ({
  value,
  target,
  guesses,
}: {
  value: string;
  target: string;
  guesses: Array<string>;
}) => {
  const targetArray = target.toUpperCase().split('');

  if (!targetArray.includes(value)) {
    return KeyColors.absent;
  } else {
    const targetIndex = targetArray.indexOf(value);
    console.log('TARGET INDEX => ', targetIndex);
    for (let i = 0; i < guesses.length; i++) {
      const guessLetter = guesses[i].split('');
      for (let j = 0; j < guessLetter.length; j++) {
        if (guessLetter[j][0] === value[0]) {
          if (j === targetIndex) {
            return KeyColors.success;
          }
        }
      }
    }

    return KeyColors.misplaced;
  }
};
