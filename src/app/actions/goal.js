// @flow
import { UPDATE_GOAL, UPDATE_LOCKED } from '../constants/ActionTypes';

export type ActionForGoalData = {
  goalID: string;
  attrName: string;
}
export type UpdateGoalActionData = {
  goalID: string,
  attrName: string,
  newVal: number | string,
}

export type UpdateGoalAction = {
  type: UPDATE_LOCKED;
  ...UpdateGoalActionData
}

export type ActionForGoal = {
  type: UPDATE_LOCKED;
  ...ActionForGoal
}
export const updateGoal = ({ goalID, attrName, newVal }: UpdateGoalActionData): ActionForGoal => (
  {type: UPDATE_GOAL, attrName, newVal, goalID }
);

export const updateLocked = ({ goalID, attrName }: ActionForGoalData): UpdateGoalAction => (
  { type: UPDATE_LOCKED, goalID, attrName }
);
