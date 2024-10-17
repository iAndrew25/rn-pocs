import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Icon from '@components/icon/icon';
import {RowLayout} from '@layouts';
import {useCountRenders} from 'utils';

function ListItem({
  title,
  action,
  description,
  leftComponent,
  centerComponent,
  RightComponent,
}) {
  const renders = useCountRenders('ListItem');

  return (
    <>
      <RowLayout
        left={leftComponent}
        center={
          centerComponent ? (
            centerComponent
          ) : (
            <View style={styles.center}>
              {Boolean(title) && <Text style={styles.title}>{title}</Text>}
              {Boolean(description) && (
                <Text style={styles.description}>{description}</Text>
              )}
            </View>
          )
        }
        right={
          RightComponent ? (
            <RightComponent action={action} />
          ) : (
            <View style={styles.sides}>
              <Text>{action}</Text>
            </View>
          )
        }
      />
      <View style={styles.componentRenders}>
        <Text>R: {renders}</Text>
      </View>
    </>
  );
}

function ListItemIcon({name}) {
  const renders = useCountRenders('ListItemIcon');

  return (
    <View style={styles.iconWrapper}>
      <Icon name={name} />
      <View style={styles.renders}>
        <Text>R: {renders}</Text>
      </View>
    </View>
  );
}

function ListItemAction({action}) {
  const renders = useCountRenders('ListItemAction');

  return (
    <View style={styles.sides}>
      <View style={styles.action}>
        <Text>{action}</Text>
      </View>
      <View style={styles.renders}>
        <Text>R: {renders}</Text>
      </View>
    </View>
  );
}

function ListItemCenterV1({title, description}) {
  const renders = useCountRenders('ListItemCenterV1');

  return (
    <View style={styles.centerV1}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.renders}>
        <Text>R: {renders}</Text>
      </View>
    </View>
  );
}

function ListItemCenterV2({title, description}) {
  const renders = useCountRenders('ListItemCenterV2');

  return (
    <View style={styles.centerV2}>
      <View style={styles.centerV2Avatar} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.renders}>
        <Text>R: {renders}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.compose({
  sides: {
    width: 88,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fe5e41',
    gap: 8,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    backgroundColor: '#f3c178',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
  iconWrapper: {
    width: 88,
    height: 64,
    padding: 8,
    backgroundColor: '#d8f1a0',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  centerV1: {
    backgroundColor: '#f3c178',
    flex: 1,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerV2: {
    padding: 8,
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#f3c178',
    flex: 1,
    alignItems: 'center',
  },
  centerV2Avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ffffff66',
  },
  renders: {
    position: 'absolute',
    top: -20,
  },
  action: {
    backgroundColor: '#ffffff33',
    padding: 8,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  componentRenders: {
    width: '100%',
    alignItems: 'center',
    marginTop: 8,
  },
});

const MemoizedListItem = memo(ListItem);
MemoizedListItem.Icon = memo(ListItemIcon);
MemoizedListItem.Action = memo(ListItemAction);
MemoizedListItem.CenterV1 = memo(ListItemCenterV1);
MemoizedListItem.CenterV2 = memo(ListItemCenterV2);

export default MemoizedListItem;
