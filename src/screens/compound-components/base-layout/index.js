import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ListItem} from '@components';
import {getRandomString, getRandomFromList, getNextFromList} from '@utils';

import unicodeMap from '@components/icon/unicode-map.json';

const unicodeKeys = Object.keys(unicodeMap);
const actions = ['Approve', 'Reject', 'Hold', 'Review'];

function BaseLayout() {
  const [title, setTitle] = useState(getRandomString());
  const [action, setAction] = useState(actions[0]);
  const [icon, setIcon] = useState(unicodeKeys[0]);

  const updateTitle = () => setTitle(getRandomString());
  const updateAction = () => setAction(getNextFromList(actions, action));
  const updateIcon = () => setIcon(getRandomFromList(unicodeKeys));

  return (
    <View style={styles.wrapper}>
      <ListItem
        centerComponent={
          <ListItem.CenterV2 title={title} description={`${title}::${title}`} />
        }
        title={title}
        description={`${title}::${title}`}
        action={action}
        leftComponent={<ListItem.Icon name={icon} />}
        RightComponent={ListItem.Action}
      />
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={StyleSheet.compose(styles.button, styles.updateIcon)}
          onPress={updateIcon}>
          <Text>Update icon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.compose(styles.button, styles.updateTitle)}
          onPress={updateTitle}>
          <Text>Update odds</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={StyleSheet.compose(styles.button, styles.updateAction)}
          onPress={updateAction}>
          <Text>Update label</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 32,
  },
  buttonWrapper: {
    padding: 16,
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  updateTitle: {
    backgroundColor: '#f3c178',
  },
  updateAction: {
    backgroundColor: '#fe5e41',
  },
  updateIcon: {
    backgroundColor: '#d8f1a0',
  },
});

export default BaseLayout;
