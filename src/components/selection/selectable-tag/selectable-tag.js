import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function SelectableTag({label, isSelected, onPress}) {
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
    borderColor: '#FF8C42',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  selected: {
    backgroundColor: '#FF8C4266',
    borderWidth: 0,
  },
  label: {
    color: '#000',
  },
});

export default SelectableTag;
