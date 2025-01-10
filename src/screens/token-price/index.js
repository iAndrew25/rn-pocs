import React, {Fragment, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {getRandomFromList, useCountRenders} from 'utils';
import {useTokenPrice, tokenPriceSelector} from 'config/store';

const randomTokensList = Array(100)
  .fill()
  .map((_, i) => i + 1);

const getRandomTokens = () =>
  Array(5)
    .fill()
    .map(() => getRandomFromList(randomTokensList));

function TokenPrice() {
  const [tokensList, setTokensList] = useState([]);

  const handleOnAddNewTokens = () => {
    const newTokens = getRandomTokens();
    setTokensList(prevTokensList => [...prevTokensList, ...newTokens]);
  };

  const handleOnClearTokens = () => {
    setTokensList([]);
  };

  return (
    <Fragment>
      <View style={styles.header}>
        <View style={styles.buttons}>
          <Text onPress={handleOnClearTokens}>Clear token prices</Text>
          <Text onPress={handleOnAddNewTokens}>Add new tokens</Text>
        </View>
        <View style={styles.listItemWrapper}>
          {tokensList.map(token => (
            <ListItem key={token} tokenId={token} />
          ))}
        </View>
      </View>
    </Fragment>
  );
}

const ListItem = React.memo(({tokenId}) => {
  const count = useCountRenders(`ListItem ${tokenId}`);
  const tokenPrice = useTokenPrice(tokenPriceSelector(tokenId));

  return (
    <View style={styles.listItem}>
      <Text>
        {count} - ListItem {tokenId}
      </Text>
      <Text>
        {tokenPrice?.hasError ? 'Error' : tokenPrice?.price || 'Loading'}
      </Text>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 16,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  listItemWrapper: {
    marginTop: 16,
  },
});

export default TokenPrice;
