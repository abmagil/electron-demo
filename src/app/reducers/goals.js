import sum from 'lodash/sum';

import * as actions from '../constants/ActionTypes';
import * as calculated from '../utils/attr-relationships';

// Return [0] because .filter returns an array of length 1
function remainingAttr(lockedAttr, changingAttr) {
  return ['goalTotal', 'deadlineYear', 'spendingPerMonth']
    .filter((attr) => (attr !== lockedAttr))
    .filter((attr) => (attr !== changingAttr))[0];
}

const functionMap = {
  goalTotal: calculated.total,
  deadlineYear: calculated.endYear,
  spendingPerMonth: calculated.spendingPerMonth
};

const goal = (state = {}, action) => {
  const { attrName: changingAttr, newVal} = action;
  const { lockedAttr } = state;
  const attrToCalculate = remainingAttr(lockedAttr, changingAttr);
  const calculation = functionMap[attrToCalculate];
  if (action.key !== state.key) { throw new Error('How did you hit this?'); } // shouldn't ever hit this

  return {
    ...state,
    [changingAttr]: newVal,
    [attrToCalculate]: calculation({
      ...state,
      [changingAttr]: newVal
    })
  };
};

const updateLocked = (state = {}, action) => {
  return {
    ...state,
    lockedAttr: action.attrName
  };
};

export default function goals(state = {}, action) {
  switch (action.type) {
  case actions.ADD_GOAL: {
    const { goal: newGoal } = action;

    return {
      ...state,
      [newGoal.id]: newGoal
    };
  }
  case actions.UPDATE_GOAL: {
    const updateGoal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: goal(updateGoal, action) 
    };
  }
  case actions.UPDATE_LOCKED: {
    const uGoal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: updateLocked(uGoal, action)
    };
  }
  default:
    return state;
  }
}

export const orderedGoalsFrom = (state) => (
  state.order.map((goalId) => (state.goals[goalId])) || []
);

export const totalGoalSpendingFrom = (state) => {
  const objectValues = Object.keys(state.goals).map((key) => state.goals[key]);
  return sum(objectValues.map((goal) => (goal.spendingPerMonth)));
};
