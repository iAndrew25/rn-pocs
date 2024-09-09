import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {Spacer, RowLayout} from '@layouts';

function ListItem({title, description, iconName, right}) {
  return (
    <RowLayout
      left={
        <Spacer direction="right" size={8} style={styles.sides}>
          <Text>{iconName}</Text>
        </Spacer>
      }
      center={
        <View style={styles.center} backgroundColor="pink">
          {Boolean(title) && <Text style={styles.title}>{title}</Text>}
          {Boolean(description) && (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>
      }
      right={
        <Spacer direction="left" size={8} style={styles.sides}>
          <Text>{'>'}</Text>
        </Spacer>
      }
    />
  );
}

const styles = StyleSheet.compose({
  sides: {
    width: 48,
    height: 48,
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});

export default ListItem;
