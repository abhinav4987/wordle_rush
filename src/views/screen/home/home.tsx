import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {tailwind} from 'tailwind';
import {pushToPlay, pushToStatistics} from 'src/navigators';
import WordDuck from 'src/state/ducks/words';
import {dispatch} from 'src/state/store';
import {Play, Stats} from 'src/assets/svg';

const {getRnadomFiveLetterWord} = WordDuck;
const Home = ({componentId}: {componentId: string}) => {
  const pressToPlay = () => {
    dispatch(getRnadomFiveLetterWord());
    pushToPlay(componentId);
  };

  return (
    <View style={tailwind('h-full items-center justify-center bg-black')}>
      <Text style={tailwind('text-white font-extrabold text-4xl')}>
        WORDLERUSH
      </Text>
      <View
        style={tailwind('flex-row items-center justify-center w-9/12 mt-8')}>
        <TouchableOpacity
          onPress={() => pushToStatistics(componentId)}
          style={tailwind(
            ' flex-row items-center px-3 py-3 bg-0071BC rounded-md mx-4',
          )}>
          <Stats fillColor={'#000'} width={18} height={18} />
          <Text style={tailwind(' text-base mx-2 text-white')}>STATS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={pressToPlay}
          style={tailwind(
            ' flex-row items-center px-3 py-3 bg-B32624 rounded-md mx-4',
          )}>
          <Play fillColor={'#fff'} width={'18'} height={'18'} />
          <Text style={tailwind(' text-base mx-2 text-white')}>PLAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
