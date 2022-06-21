export const getRowResult = (original: string, input: string) => {
  let letterCount = Array(26).fill(0);
  original.split('').forEach(letter => {
    letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  });
  const originalArray = original.split('');

  const result = Array(original.length).fill(-1);
  for (let i = 0; i < result.length; i++) {
    if (original[i] === input[i]) {
      result[i] = 1;
      letterCount[original[i].charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (original[i] !== input[i]) {
      if (
        originalArray.includes(input[i]) &&
        letterCount[input[i].charCodeAt(0) - 'a'.charCodeAt(0)]
      ) {
        letterCount[input[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
        result[i] = 2;
      } else {
        result[i] = 0;
      }
    }
  }

  return result;
};
