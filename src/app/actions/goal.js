// @flow
import { UPDATE_GOAL, UPDATE_LOCKED } from '../constants/ActionTypes';

export type ActionForGoal = {
  goalID: string;
  attrName: string;
}
export type UpdateGoalAction = {
  goalID: string,
  attrName: string,
  newVal: number | string,
}
export const updateGoal = ({ goalID, attrName, newVal }: UpdateGoalAction) => (
  {type: UPDATE_GOAL, attrName, newVal, goalID }
);

export const updateLocked = ({ goalID, attrName }: ActionForGoal) => (
  { type: UPDATE_LOCKED, goalID, attrName }
);
