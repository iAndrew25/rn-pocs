export const getTokenPrices = async tokenIds => {
  const response = tokenIds.map(tokenId => ({
    tokenId,
    price: tokenId * 1.23,
    hasError: Math.random() > 0.5,
  }));

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};
