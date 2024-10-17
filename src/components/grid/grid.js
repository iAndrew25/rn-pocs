import React from 'react';
import {View, StyleSheet} from 'react-native';

const gridColors = {
  tl: '#729EA1',
  tr: '#B5BD89',
  bl: '#FF8C42',
  br: '#D67AB1',
};

function Grid({tl, tr, bl, br}) {
  return (
    <View className="grid">
      <View className="grid__tl">{tl}</View>
      <View className="grid__tr">{tr}</View>
      <View className="grid__bl">{bl}</View>
      <View className="grid__br">{br}</View>
    </View>
  );
}

export default Grid;
