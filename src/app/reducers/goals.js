import sum from 'lodash/sum';
import orderBy from 'lodash/orderBy';
import without from 'lodash/without';

import * as actions from '../constants/ActionTypes';
import * as calculated from '../utils/attr-relationships';
import partialToCompleteGoal from '../utils/partial-to-complete-goal';

export const GOAL_ATTRIBUTES = [
  'goalTotal',
  'deadlineYear',
  'spendingPerMonth',
];

// without returns an array, hence the [0]
function remainingAttr(attr1, attr2) {
  const remainingAttr = without(GOAL_ATTRIBUTES, attr1, attr2)[0];

  return remainingAttr;
}

const functionMap = {
  goalTotal: calculated.total,
  deadlineYear: calculated.endYear,
  spendingPerMonth: calculated.spendingPerMonth,
};

const goal = (state = {}, action) => {
  const { attrName: changingAttr, newVal} = action;
  const { lockedAttr } = state;
  const attrToCalculate = remainingAttr(lockedAttr, changingAttr);
  const calculation = functionMap[attrToCalculate];
  if (action.key !== state.key) { throw new Error('How did you hit this?'); }

  return {
    ...state,
    [changingAttr]: newVal,
    [attrToCalculate]: calculation({
      ...state,
      [changingAttr]: newVal,
    }),
  };
};

const fullGoalFromPartial = partialToCompleteGoal((goalData) => {
  throw new Error(`Too many unset attributes for goal ${goalData.id}`);
});

const updateLocked = (state = {}, action) => {
  return {
    ...state,
    lockedAttr: action.attrName,
  };
};

export default function goals(state = {}, action) {
  switch (action.type) {
  case actions.ADD_GOAL: {
    let { goal: newGoal } = action;

    newGoal = fullGoalFromPartial(newGoal);
    return {
      ...state,
      [newGoal.id]: newGoal,
    };
  }
  case actions.UPDATE_GOAL: {
    const updateGoal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: goal(updateGoal, action),
    };
  }
  case actions.UPDATE_LOCKED: {
    const uGoal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: updateLocked(uGoal, action),
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

export const completionOrderedGoalsFrom = (state) => {
  return orderBy(state.goals, ['deadlineYear', 'spendingPerMonth']);
};
