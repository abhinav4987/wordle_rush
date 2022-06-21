import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Settings = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: '100%',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 24,
  },
});

export default Settings;
