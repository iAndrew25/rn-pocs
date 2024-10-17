import React from 'react';
import {Text, StyleSheet} from 'react-native';

import unicodeMap from './unicode-map.json';

function Icon({name, color, size}) {
  return (
    <Text
      style={StyleSheet.compose(styles.icon, {
        color,
        fontSize: size,
      })}>
      {unicodeMap[name]}
    </Text>
  );
}

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'svgtofont',
  },
});

export default Icon;
