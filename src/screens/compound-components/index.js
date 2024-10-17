import React, {Fragment, useState} from 'react';

import Tabs from '../../components/tabs';

import BaseLayout from './base-layout';
import Selectable from './selectable';

const routes = ['Base layout', 'Selectable'];

function CompoundComponents() {
  const [route, setRoute] = useState('');

  const renderHome = () => null;

  const renderContent = () => {
    switch (route) {
      case 'Base layout':
        return <BaseLayout />;
      case 'Selectable':
        return <Selectable />;
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

export default CompoundComponents;
