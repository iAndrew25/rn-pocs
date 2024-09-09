import React, {Fragment, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

import Tabs from '../../../components/tabs';

const platforms = ['ios', 'android', 'web', 'default'];

function Contexts() {
  const [platform, setPlatform] = useState(platforms[0]);
  const {t} = useTranslation();

  return (
    <Fragment>
      <Tabs
        selectedTab={platform}
        tabs={platforms}
        setSelectedTab={setPlatform}
      />
      <View style={styles.content}>
        <Text>{t('message', {context: platform})}</Text>
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
