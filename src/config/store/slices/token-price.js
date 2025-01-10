import {create} from 'zustand';
import {createSelector} from 'reselect';
import {TokenPriceService} from 'services/token-price.service';

export const useTokenPrice = create(set => ({
  tokenPrice: {},
  setTokenPrices: tokenPrices => {
    set(state => ({
      tokenPrice: {
        ...state.tokenPrice,
        ...Object.values(tokenPrices).reduce(
          (acc, token) => ({
            ...acc,
            [token.tokenId]: token,
          }),
          {},
        ),
      },
    }));
  },
}));

export const tokenPriceSelector = tokenId =>
  createSelector([store => store.tokenPrice[tokenId]], tokenPrices => {
    if (tokenPrices) {
      return {...tokenPrices};
    } else {
      TokenPriceService.addToken(tokenId);
      return undefined;
    }
  });
