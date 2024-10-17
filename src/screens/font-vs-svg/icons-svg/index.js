import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import * as icons from './icons';

const iconsList = Object.entries(icons);

function IconsFont() {
  return (
    <View style={styles.wrapper}>
      {iconsList.map(([key, Component]) => (
        <View key={key} style={styles.container}>
          {Component(styles.iconWrapper)}
          <Text style={styles.text}>{key}</Text>
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
    backgroundColor: '#f0f0f0',
  },
  container: {
    width: 48,
    gap: 8,
  },
  iconWrapper: {
    width: 48,
    height: 48,
  },
  text: {
    textAlign: 'center',
    fontSize: 9,
  },
});

export default IconsFont;
