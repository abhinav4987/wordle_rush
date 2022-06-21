import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {tailwind} from 'tailwind';
import {Tick, Play, Home, Cross} from 'src/assets/svg';
import {PercentBar} from 'src/views/components';
import {dismissOverlay, pushHomeScreen} from 'src/navigators';
import words from 'src/state/ducks/words';
import {dispatch} from 'src/state/store';
import results from 'src/state/ducks/results';
import {useAppSelector} from 'src/state/store';

const {selectFiveLetterResult} = results;
const {getRnadomFiveLetterWord} = words;

const Result = ({
  componentId,
  target,
  solved,
}: {
  componentId: string;
  target: string;
  solved: boolean;
}) => {
  const onPressHome = () => {
    pushHomeScreen();
  };
  const stats: {
    wins: number;
    loss: number;
    totalGames: number;
    successInXTry: number[];
  } = useAppSelector(selectFiveLetterResult);

  const {wins, successInXTry} = stats;

  const onPressPlay = () => {
    dispatch(getRnadomFiveLetterWord());
  };
  return (
    <View
      style={[
        tailwind(' items-center justify-center h-full'),
        {backgroundColor: 'rgba(0,0,0,0.55)'},
      ]}>
      {/* icon */}
      <View
        style={tailwind(
          'bg-result px-2 py-3 rounded-sm items-center justify-center w-9/12 rounded-lg',
        )}>
        <View
          style={[
            tailwind(
              'absolute items-center justify-center result-icon-position rounded-full bg-00BA67 p-4 border-2 tick-br-color',
            ),
            {
              width: 110,
              height: 110,
            },
          ]}>
          {solved ? (
            <Tick fillColor="#000" width="90" height="90" />
          ) : (
            <Cross fillColor="#000" width="70" height="70" />
          )}
        </View>

        <Text style={tailwind('text-white text-xl font-semibold mt-12 ')}>
          {solved ? 'WIN' : 'LOST'}
        </Text>

        <View
          style={tailwind(
            'items-center justify-center my-2 border-1 px-4 rounded-sm bg-white',
          )}>
          {/* <Text style={tailwind('text-xs text-white')}>TARGET</Text> */}
          <Text style={tailwind('text-2xl  font-extrabold')}>
            {target.toUpperCase()}
          </Text>
        </View>

        <View style={tailwind('items-center mt-4')}>
          <Text style={tailwind('text-sm font-semibold text-white mb-1')}>
            Guess Distribution
          </Text>
          {successInXTry.slice(0, 6).map((item: number, indx: number) => {
            return (
              <PercentBar
                key={indx}
                tries={indx}
                wins={item}
                totalGames={wins}
              />
            );
          })}
        </View>
        <View
          style={tailwind('mt-4 w-11/12 flex-row items-center justify-around')}>
          <TouchableOpacity
            onPress={() => {
              dismissOverlay({componentId: componentId});
              onPressHome();
            }}
            style={tailwind(
              ' flex-row items-center px-3 py-3 bg-B32624 rounded-md',
            )}>
            <Home fillColor={'#fff'} width={'20'} height={'20'} />
            <Text style={tailwind('text-base mx-2 text-white')}>HOME</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              dismissOverlay({componentId: componentId});
              onPressPlay();
            }}
            style={tailwind(
              ' flex-row items-center px-3 py-3 bg-06C755 rounded-md',
            )}>
            <Play fillColor={'#fff'} width={'18'} height={'18'} />
            <Text style={tailwind(' text-base mx-2 text-white')}>PLAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Result;
