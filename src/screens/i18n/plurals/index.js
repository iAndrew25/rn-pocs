import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import Tabs from '../../../components/tabs';

const reactions = [0, 1, 20];

function Contexts() {
  const [reaction, setReaction] = useState(reactions[0]);
  const {t} = useTranslation();

  return (
    <Fragment>
      <Tabs
        selectedTab={reaction}
        tabs={reactions}
        setSelectedTab={setReaction}
      />
      <View style={styles.content}>
        <Text>{t('reaction', {count: reaction})}</Text>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    margin: 16,
  },
});

export default Contexts;
