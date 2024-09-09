import React from 'react';
import {View, StyleSheet} from 'react-native';

import {toTitleCase} from '@utils';

function Spacer({children, direction, size, style}) {
  const suffix = direction ? toTitleCase(direction) : '';

  return (
    <View style={StyleSheet.compose({[`padding${suffix}`]: size}, style)}>
      {children}
    </View>
  );
}

export default Spacer;
