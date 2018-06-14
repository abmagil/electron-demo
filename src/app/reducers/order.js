// @flow
import * as actionTypes from '../constants/ActionTypes';

type OrderAction = AddGoalAction | MoveGoalUpAction | MoveGoalDownAction
function order(state: Array<number> = [], action: OrderAction) {
  switch (action.type) {
  case 'GOAL:ADD': {
    return [
      action.goal.id,
      ...state,
    ];
  }
  case actionTypes.GOAL_MOVE_UP: {
    const goalIdx: number = state.indexOf(action.id);
    if (goalIdx <= 0) { // guard both non-existent element and first element
      return state;
    }
    const prevEl = state[goalIdx - 1];
    return [
      ...state.slice(0, goalIdx - 1),
      state[goalIdx],
      prevEl,
      ...state.slice(goalIdx + 1),
    ];
  }
  case actionTypes.GOAL_MOVE_DOWN: {
    const goalIdx: number = state.indexOf(action.id);
    if ((goalIdx < 0) || (goalIdx == state.length - 1)) {
      return state;
    }
    return [
      ...state.slice(0,goalIdx),
      state[goalIdx + 1],
      state[goalIdx],
      ...state.slice(goalIdx + 2),
    ];
  }
  default:
    return state;
  }
}

export default order;
