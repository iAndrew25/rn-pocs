import {getTokenPrices} from 'config/api';
import {useTokenPrice} from 'config/store';

class TokenPriceServiceClass {
  tokensList = [];

  addToken = token => {
    console.log(
      'TokenPriceServiceClass::addToken::calls',
      token,
      this.tokensList,
    );

    this.tokensList.push(token);
    if (this.tokensList.length === 1) {
      this.fetchTokenPrices();
    }
  };

  fetchTokenPrices = async () => {
    console.log(
      'TokenPriceServiceClass::fetchTokenPrices::calls',
      this.tokensList,
    );
    setImmediate(async () => {
      const clonedTokensList = [...this.tokensList];
      this.tokensList = [];
      console.log(
        'TokenPriceServiceClass::setImmediate::calls',
        clonedTokensList,
      );
      const response = await getTokenPrices(clonedTokensList);

      console.log('TokenPriceServiceClass::setImmediate::response', response);

      useTokenPrice.getState().setTokenPrices(response);
    });
  };
}

const TokenPriceService = new TokenPriceServiceClass();

export {TokenPriceService};
