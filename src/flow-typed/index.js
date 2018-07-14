// @flow
/* eslint no-undef: 0 */
import * as actionTypes from '../app/constants/ActionTypes';

export type Goal = {
  +id: string;
  +type: string;
  +goalTotal: number;
  +spendingPerMonth: number;
  +lockedAttr: string;
  +startingYear: number;
  +deadlineYear: number;
};

export type GoalEditableAttribute = 'goalTotal' | 'spendingPerMonth' | 'startingYear' | 'deadlineYear'

export type ObjectOf<T> = {
  [string]: T
};

type SpendingTree = number | ObjectOf<SpendingTree>;
type StateShape = {
  +spending: SpendingTree;
  +goals: ObjectOf<Goal>;
  +order: Array<string>;
  +availableCash: number;
};

type Action = {
  +type: string;
}

export type AddGoalAction = {
  ...Action;
  type: 'GOAL:ADD';
  +goal: Goal;
}

export type UpdateCashAction = {
  ...Action,
  availableCash: number;
}

export type MoveGoalUpAction = {
  ...Action;
  type: 'GOAL:MOVE_UP';
  +id: string;
}

export type MoveGoalDownAction = {
  ...Action;
  type: 'GOAL:MOVE_DOWN';
  +id: string;
}

export type RemoveGoalAction = {
  ...Action;
  type: 'GOAL:REMOVE'
}

export type ActionForGoalData = {
  goalID: string;
  attrName: GoalEditableAttribute;
}

export type SetLockedGoalAction = {
  +goalID: string;
  attrName: GoalEditableAttribute;
  type: 'GOAL:UPDATE:LOCKED'
};

export type UpdateGoalActionData = {
  +goalID: string,
  +attrName: GoalEditableAttribute,
  +newVal: number | string,
}

export type UpdateGoalAction = {
  +goalID: string,
  +attrName: GoalEditableAttribute,
  +newVal: number | string,
  type: 'GOAL:UPDATE';
}

export type ActionForGoal = {
  type: actionTypes.UPDATE_LOCKED;
  ...ActionForGoal
}

export type UpdateSpendingAction = {
  ...Action;
  name: string;
  value: number;
}
