import React, {useState} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

import Tabs from './components/tabs';

import FontVsSVG from './screens/font-vs-svg';
import I18n from './screens/i18n';
import CompoundComponents from './screens/compound-components';
import TokenPrice from './screens/token-price';

const routes = ['FontVsSVG', 'i18n', 'CompoundComponents', 'TokenPrice'];

function Main() {
  const [route, setRoute] = useState('');

  const renderContent = () => {
    switch (route) {
      case 'FontVsSVG':
        return <FontVsSVG />;
      case 'i18n':
        return <I18n />;
      case 'CompoundComponents':
        return <CompoundComponents />;
      case 'TokenPrice':
        return <TokenPrice />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView flex={1}>
      <ScrollView>
        <Tabs selectedTab={route} tabs={routes} setSelectedTab={setRoute} />
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Main;
