import React from 'react';

import GoalsContainer from './GoalsContainer';
// import CashContainer from './CashContainer';
import GoalsNavContainer from './GoalsNavContainer';
// import FreeCashCalculatorFormContainer from './FreeCashCalculatorFormContainer';
// import FreeCashCalculatorGraphContainer from './FreeCashCalculatorGraphContainer';
// import OverTimeContainer from './OverTimeContainer';

// const GoalsContainer = () => (
//   <div />
// );
const CashContainer = () => (
  <div />
);
const FreeCashCalculatorFormContainer = () => (
  <div />
);
const FreeCashCalculatorGraphContainer = () => (
  <div />
);

const App = () => (
  <div className="pane-group">
    <div className="pane-sm sidebar">
      <GoalsNavContainer />
    </div>
    <div className="pane">
      <section>
        <h1>Goals in React</h1>
        <div className='entry'>
          <GoalsContainer />
          <CashContainer />
        </div>
        <div>
          <FreeCashCalculatorFormContainer />
          <FreeCashCalculatorGraphContainer />
        </div>
      </section>
    </div>
  </div>
);

export default App;
