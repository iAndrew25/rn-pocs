import React, {Fragment, useState} from 'react';

import Tabs from '../../components/tabs';

import Contexts from './contexts';
import Plurals from './plurals';
import Lists from './lists';

const routes = ['Contexts', 'Plurals', 'Lists'];

function FontVsSVG() {
  const [route, setRoute] = useState('');

  const renderHome = () => null;

  const renderContent = () => {
    switch (route) {
      case 'Contexts':
        return <Contexts />;
      case 'Plurals':
        return <Plurals />;
      case 'Lists':
        return <Lists />;
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

export default FontVsSVG;
