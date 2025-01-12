import React, {useState} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';

import {getRandomTokens} from 'utils';
import Token from '../token';

let pages = 1;

function Pagination() {
  const [tokensList, setTokensList] = useState(getRandomTokens(20));

  const handleOnLoadMore = () => {
    if (pages > 5) {
      return;
    }

    const newTokens = getRandomTokens(20);
    setTokensList(prevTokensList => [...prevTokensList, ...newTokens]);
    pages++;
  };

  return (
    <View style={styles.listItemWrapper}>
      <FlatList
        data={tokensList}
        onEndReached={handleOnLoadMore}
        onEndReachedThreshold={0.1}
        renderItem={({item}) => <Token tokenId={item} />}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listItemWrapper: {
    marginTop: 16,
    marginHorizontal: 16,
    height: 600,
  },
});

export default Pagination;
