import React from 'react';

import GoalsContainer from './GoalsContainer';
import CashContainer from './CashContainer';
import FreeCashCalculatorContainer from './FreeCashCalculatorFormContainer';
import FreeCashCalculatorGraphContainer from './FreeCashCalculatorGraphContainer';
// import OverTimeContainer from './OverTimeContainer';


const App = () => (
  <div>
    <div className='entry'>
      <GoalsContainer />
      <CashContainer />
    </div>
    <div>
      <FreeCashCalculatorContainer />
      <FreeCashCalculatorGraphContainer />
    </div>
  </div>
);

export default App;
