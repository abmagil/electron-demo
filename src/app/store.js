import { createStore, combineReducers } from 'redux';

import availableCash from './reducers/available-cash';
import goals from './reducers/goals';
import order from './reducers/order';
import overTime from './reducers/overTime';

const reducer = combineReducers({
  goals,
  order,
  availableCash,
  overTime,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
