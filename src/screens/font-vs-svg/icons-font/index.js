import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import unicodeMap from './unicode-map.json';

const iconsList = Object.values(unicodeMap);

function IconsFont() {
  return (
    <View style={styles.wrapper}>
      {iconsList.map(icon => (
        <View key={icon} style={styles.iconWrapper}>
          <Text style={styles.icon}>{icon}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  iconWrapper: {
    width: 32,
    height: 32,
  },
  icon: {
    fontFamily: 'svgtofont',
    fontSize: 20,
  },
});

export default IconsFont;
