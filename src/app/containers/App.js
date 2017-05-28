import React from 'react';

import GoalsContainer from './GoalsContainer';
import CashContainer from './CashContainer';
import OverTimeContainer from './OverTimeContainer';

const App = () => (
  <div>
    <div className='entry'>
      <GoalsContainer />
      <CashContainer />
    </div>
    <div className='display'>
      <OverTimeContainer />
    </div>
  </div>
);

export default App;
