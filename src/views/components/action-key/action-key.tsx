import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {KeyColors} from 'src/constants';

interface ActionKeyProps {
  label?: string;
  icon?: Element;
  onPress: Function;
}

const ActionKey = ({icon, label, onPress}: ActionKeyProps) => {
  const presssHandler = () => {
    onPress(label);
  };
  return (
    <TouchableOpacity
      style={[styles.content, {backgroundColor: KeyColors.normal}]}
      onPress={presssHandler}>
      <View style={styles.box}>
        {icon && {icon}}
        <Text
          style={{
            color: KeyColors.text,
          }}>
          {label && label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1.5,
    paddingVertical: 15,
    borderRadius: 4,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ActionKey;
