import * as actionTypes from '../constants/ActionTypes';

function order(state = [], action) {
  const goalIdx = state.indexOf(action.id);
  switch (action.type) {
  case actionTypes.ADD_GOAL: {
    return [
      ...state,
      action.goal.id
    ];
  }
  case actionTypes.GOAL_MOVE_UP: {
    if (goalIdx <= 0) { // guard both non-existent element and first element
      return state;
    }
    const prevEl = state[goalIdx - 1];
    return [
      ...state.slice(0, goalIdx - 1),
      state[goalIdx],
      prevEl,
      ...state.slice(goalIdx + 1)
    ];
  }
  case actionTypes.GOAL_MOVE_DOWN: {
    if ((goalIdx < 0) || (goalIdx == state.length - 1)) {
      return state;
    }
    return [
      ...state.slice(0,goalIdx),
      state[goalIdx + 1],
      state[goalIdx],
      ...state.slice(goalIdx + 2)
    ];
  }
  default:
    return state;
  }
}

export default order;
