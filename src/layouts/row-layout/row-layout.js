import React from 'react';
import {View, StyleSheet} from 'react-native';

function RowLayout({left, center, right, style}) {
  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      {left && <View>{left}</View>}
      {center && <View style={styles.center}>{center}</View>}
      {right && <View>{right}</View>}
    </View>
  );
}

const styles = StyleSheet.compose({
  container: {
    flexDirection: 'row',
  },
  center: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

export default RowLayout;
