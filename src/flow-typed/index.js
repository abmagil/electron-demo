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

export type ObjectOf<T> = {
  [string]: T
};

type SpendingTree = number | ObjectOf<SpendingTree>;
type StateShape = {
  +spending: SpendingTree;
  +goals: ObjectOf<Goal>;
  +order: Array<number>;
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

export type UpdateSpendingAction = {
  ...Action;
  name: string;
  value: number;
}
