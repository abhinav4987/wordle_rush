import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import results from 'src/state/ducks/results';
import {useAppSelector} from 'src/state/store';
import {tailwind} from 'tailwind';
import {PercentBar} from 'src/views/components';
import {Home} from 'src/assets/svg';
import {pushHomeScreen} from 'src/navigators';

const {selectFiveLetterResult} = results;

const Statistics = () => {
  const stats: {
    wins: number;
    loss: number;
    totalGames: number;
    successInXTry: number[];
  } = useAppSelector(selectFiveLetterResult);
  const {wins, loss, totalGames, successInXTry} = stats;

  return (
    <View style={tailwind('bg-black h-full items-center justify-center')}>
      <Text style={tailwind('text-white text-4xl font-bold ')}>STATS</Text>
      <View style={tailwind('flex-row items-center justify-around mt-8')}>
        <View style={tailwind('items-center justify-center mx-8')}>
          <Text style={tailwind('text-white font-bold text-base tc-18B770')}>
            WINS
          </Text>
          <Text style={tailwind('text-white text-3xl font-light tc-18B770')}>
            {wins}
          </Text>
        </View>
        <View style={tailwind('items-center justify-center mx-8')}>
          <Text style={tailwind('text-white font-bold text-base tc-B32624')}>
            LOSS
          </Text>
          <Text style={tailwind('text-white text-3xl font-light tc-B32624')}>
            {loss}
          </Text>
        </View>
        <View style={tailwind('items-center justify-center mx-8 tc-0059A3')}>
          <Text style={tailwind('text-white font-bold text-base tc-1473B8')}>
            TOTAL
          </Text>
          <Text style={tailwind('text-white text-3xl font-light tc-1473B8')}>
            {totalGames}
          </Text>
        </View>
      </View>

      <View style={tailwind('mt-8 items-center')}>
        <Text
          style={tailwind(
            'text-white my-3 mt-6 mb-6 font-light text-xl tc-BCBEC0',
          )}>
          GUESS DISTRIBUTION
        </Text>
        {successInXTry.slice(0, 6).map((item: number, indx: number) => {
          return (
            <PercentBar
              key={indx}
              tries={indx + 1}
              wins={item}
              totalGames={wins}
            />
          );
        })}
      </View>
      <View style={[tailwind('mt-12 absolute  justify-end'), {bottom: 0}]}>
        <TouchableOpacity
          onPress={pushHomeScreen}
          style={tailwind('mb-10 bg-0071BC p-4 rounded-full')}>
          <Home fillColor="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Statistics;
