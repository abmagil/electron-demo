// import { Map, fromJS } from 'immutable';
import { createStore, combineReducers } from 'redux';

import defaultCategories from './default-categories';

import availableCash from './reducers/available-cash';
import goals from './reducers/goals';
import order from './reducers/order';
import spending from './reducers/spending-categories';

const reducer = combineReducers({
  spending,
  goals,
  order,
  availableCash,
});

const initialState = {
  spending: defaultCategories(),
  goals: {
    '1': {
      id: 1,
      type: 'Emergency Goal',
      goalTotal: 1200,
      spendingPerMonth: 10,
      lockedAttr: 'spendingPerMonth',
      startingYear: Date.now(),
      deadlineYear: 2028,
    },
    '2': {
      id: 2,
      type: 'Education Goal',
      deadlineYear: 2038,
      spendingPerMonth: 100,
      lockedAttr: 'deadlineYear',
      startingYear: Date.now(),
      goalTotal: 23800,
    },
    '3': {
      id: 3,
      type: 'Travel Goal',
      goalTotal: 12000,
      deadlineYear: new Date().getFullYear() + 6,
      lockedAttr: 'goalTotal',
      startingYear: Date.now(),
      spendingPerMonth: 260.8695652173913,
    },
  },
  order: [
    3,
    2,
    1,
  ],
  availableCash: 400,
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
