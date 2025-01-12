import React, {Fragment, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {getRandomTokens, getIncrementingNumber} from 'utils';
import Token from '../token';

const getNumber = getIncrementingNumber();

function TokenPrice() {
  const [tokensList, setTokensList] = useState([]);

  const handleOnAddNewTokens = () => {
    // const newTokens = getRandomTokens(1);
    // setTokensList(prevTokensList => [...prevTokensList, ...newTokens]);
    const newTokens = getNumber();
    setTokensList(prevTokensList => [...prevTokensList, newTokens]);
  };

  const handleOnClearTokens = () => {
    setTokensList([]);
    getNumber({shouldReset: true});
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
            <Token key={token} tokenId={token} />
          ))}
        </View>
      </View>
    </Fragment>
  );
}

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
  listItemWrapper: {
    marginTop: 16,
  },
});

export default TokenPrice;
