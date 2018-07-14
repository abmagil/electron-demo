// @flow
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
function remainingAttr(attr1: string, attr2: string): string {
  const remainingAttr = without(GOAL_ATTRIBUTES, attr1, attr2)[0];

  return remainingAttr;
}

const functionMap = {
  goalTotal: calculated.total,
  deadlineYear: calculated.endYear,
  spendingPerMonth: calculated.spendingPerMonth,
};

const goal = (state: Goal, action: UpdateGoalAction) => {
  const { attrName: changingAttr, newVal} = action;
  const { lockedAttr } = state;
  const attrToCalculate = remainingAttr(lockedAttr, changingAttr);
  const calculation = functionMap[attrToCalculate];

  if (!(changingAttr && attrToCalculate)) {
    console.log('Missing Information');
    return state;
  }

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

const updateLocked = (state: Goal, action: SetLockedGoalAction): Goal => {
  return {
    ...state,
    lockedAttr: action.attrName,
  };
};

export default function goals(
  state: ObjectOf<Goal> = {},
  action: AddGoalAction | UpdateGoalAction | SetLockedGoalAction): ObjectOf<Goal> {
  switch (action.type) {
  case 'GOAL:ADD': {
    let newGoal = action.goal;

    newGoal = fullGoalFromPartial(newGoal);
    return {
      ...state,
      [newGoal.id]: newGoal,
    };
  }
  case 'GOAL:UPDATE:LOCKED': {
    const uGoal: Goal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: updateLocked(uGoal, action),
    };
  }
  case 'GOAL:UPDATE': {
    const updateGoal = state[action.goalID];
    return {
      ...state,
      [action.goalID]: goal(updateGoal, action),
    };
  }
  default:
    return state;
  }
}

export const orderedGoalsFrom = (state: StateShape): Array<Goal> => (
  state.order.map((goalId: string) => (state.goals[goalId])) || []
);

export const totalGoalSpendingFrom = (state: StateShape): number => {
  const objectValues = Object.keys(state.goals).map((key) => state.goals[key]);
  return sum(objectValues.map((goal) => (goal.spendingPerMonth)));
};

export const completionOrderedGoalsFrom = (state: StateShape): Array<Goal> => {
  return orderBy(state.goals, ['deadlineYear', 'spendingPerMonth']);
};
