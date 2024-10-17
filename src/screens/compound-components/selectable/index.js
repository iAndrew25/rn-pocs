import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Selection from '@components/selection/selection';

const options = [
  {id: '1', label: 'Lorem ipsum'},
  {id: '2', label: 'Dolor sit'},
  {id: '3', label: 'Amet consectetur'},
  {id: '4', label: 'Adipiscing elit'},
];

function Selectable() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <Text>Tags:</Text>
        <View style={styles.rowWrapper}>
          <Selection
            Element={Selection.SelectableTag}
            options={options}
            selected={selected}
            onPress={setSelected}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text>Cards:</Text>
        <View style={styles.rowWrapper}>
          <Selection
            Element={Selection.SelectableCard}
            options={options}
            selected={selected}
            onPress={setSelected}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text>List:</Text>
        <View style={styles.colWrapper}>
          <Selection
            Element={Selection.SelectableList}
            options={options}
            selected={selected}
            onPress={setSelected}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    gap: 16,
  },
  section: {
    gap: 8,
  },
  rowWrapper: {
    gap: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colWrapper: {
    gap: 8,
    flexDirection: 'column',
  },
});

export default Selectable;
