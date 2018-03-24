import React from 'react';

import GoalsContainer from './GoalsContainer';
import CashContainer from './CashContainer';
import FreeCashCalculatorContainer from './FreeCashCalculatorContainer';
// import OverTimeContainer from './OverTimeContainer';


const App = () => (
  <div>
    <div className='entry'>
      <GoalsContainer />
      <CashContainer />
    </div>
    {/* <div className='display'>
      <OverTimeContainer />
    </div> */}
    <FreeCashCalculatorContainer />
  </div>
);

export default App;
