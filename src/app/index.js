import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// REMOVE THIS BLOCK ONCE ACTIONS ARE WIRED CORRECTLY
import defaultGoals from './goals';
import { addGoal } from './actions/goals';
import availableCash from './actions/available-cash';
// REMOVE THIS BLOCK ONCE ACTIONS ARE WIRED CORRECTLY

import App from './containers/App';
import store from './store';
import './styles/index.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);

defaultGoals.map((goal) => {
  store.dispatch(addGoal(goal));
});
store.dispatch(availableCash(400));
