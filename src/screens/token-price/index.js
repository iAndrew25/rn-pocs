import React, {Fragment, useState} from 'react';

import Tabs from '../../components/tabs';

import Playground from './playground';
import Pagination from './pagination';

const routes = ['Playground', 'Pagination'];

function TokenPrice() {
  const [route, setRoute] = useState('');

  const renderHome = () => null;

  const renderContent = () => {
    switch (route) {
      case 'Playground':
        return <Playground />;
      case 'Pagination':
        return <Pagination />;
      default:
        return renderHome();
    }
  };

  return (
    <Fragment>
      <Tabs selectedTab={route} tabs={routes} setSelectedTab={setRoute} />
      {renderContent()}
    </Fragment>
  );
}

export default TokenPrice;
