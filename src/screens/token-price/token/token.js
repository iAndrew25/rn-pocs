import React, {memo} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {useCountRenders} from 'utils';
import {useTokenPrice, tokenPriceSelector} from 'config/store';

function Token({tokenId}) {
  const count = useCountRenders(`ListItem ${tokenId}`);
  const tokenPrice = useTokenPrice(tokenPriceSelector(tokenId));

  return (
    <View style={styles.listItem}>
      <Text>
        {count} - ListItem {tokenId} - {tokenPrice?.raw?.uuid || 'Loading'}
      </Text>
      <Text>
        {tokenPrice?.meta?.hasError
          ? 'Error'
          : tokenPrice?.raw?.price || 'Loading'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default memo(Token);
