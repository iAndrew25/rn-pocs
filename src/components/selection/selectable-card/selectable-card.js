import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SelectableCard({label, isSelected, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(styles.wrapper, isSelected && styles.selected)}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#D67AB1',
    padding: 8,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#D67AB166',
    borderWidth: 0,
  },
  label: {
    color: '#000',
  },
});

export default SelectableCard;
