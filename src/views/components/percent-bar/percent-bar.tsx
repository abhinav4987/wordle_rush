import {View, Text} from 'react-native';
import React from 'react';
import {tailwind} from 'tailwind';
import {parse} from 'react-native-svg';

const PercentBar = ({
  tries,
  totalGames,
  wins,
}: {
  tries: number;
  totalGames: number;
  wins: number;
}) => {
  const winPercent = wins / totalGames;
  return (
    <View style={tailwind('flex-row items-center justify-center w-10/12 my-2')}>
      <Text style={tailwind('text-white text-sm')}>{tries}</Text>
      <View
        style={tailwind(
          'flex-grow h-2  percent-bg justify-start items-start mx-2 rounded-sm',
        )}>
        <View
          style={[
            {width: `${parseFloat(winPercent.toFixed(2)) * 100}%`},
            tailwind('h-2 percent-value-bg rounded-sm'),
          ]}
        />
      </View>
      <Text style={tailwind('text-white  text-sm')}>
        {wins === 0
          ? '0'
          : (parseFloat(winPercent.toFixed(2)) * 100).toFixed(0)}
        %
      </Text>
    </View>
  );
};

export default PercentBar;
