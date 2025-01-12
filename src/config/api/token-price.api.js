import {getRandomString} from 'utils';

export const getTokenPrices = async tokenIds => {
  const response = tokenIds.map(tokenId => ({
    raw: {
      tokenId,
      price: (tokenId * 1.23).toFixed(2),
      uuid: getRandomString(),
    },
    meta: {
      hasError: Math.random() > 0.5,
      expiresAt: Date.now() + 10000, // 10 seconds
      // expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
    },
  }));

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, 2000);
  });
};
