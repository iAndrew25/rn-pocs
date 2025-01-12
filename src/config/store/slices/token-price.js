import {create} from 'zustand';
import {createSelector} from 'reselect';
import {TokenPriceService} from 'services/token-price.service';

export const useTokenPrice = create(set => ({
  tokenPrices: {},
  setTokenPrices: tokenPricesList => {
    set(state => ({
      tokenPrices: Object.values(tokenPricesList).reduce(
        (acc, token) => ({
          ...acc,
          [token.raw.tokenId]: token,
        }),
        state.tokenPrices,
      ),
    }));
  },
}));

export const tokenPriceSelector = tokenId =>
  createSelector([store => store.tokenPrices[tokenId]], tokenPrice => {
    if (tokenPrice) {
      if (tokenPrice.meta.expiresAt > Date.now()) {
        return {...tokenPrice};
      } else {
        console.log('Token expired, fetching new token price');
        TokenPriceService.addToken(tokenId);
      }
    } else {
      console.log('Token not found, fetching new token price');
      TokenPriceService.addToken(tokenId);
      return undefined;
    }
  });
