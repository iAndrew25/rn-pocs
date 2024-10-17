import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SelectableList({label, isSelected, onPress}) {
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
    borderWidth: 1,
    borderColor: '#729EA1',
    padding: 16,
    borderRadius: 16,
  },
  selected: {
    backgroundColor: '#729EA166',
    borderWidth: 0,
  },
  label: {
    color: '#000',
  },
});

export default SelectableList;
