// @flow
import { UPDATE_GOAL, UPDATE_LOCKED } from '../constants/ActionTypes';

export const updateGoal = ({ goalID, attrName, newVal }: UpdateGoalActionData): ActionForGoal => (
  {type: UPDATE_GOAL, attrName, newVal, goalID }
);

export const updateLocked = ({ goalID, attrName }: ActionForGoalData): SetLockedGoalAction => (
  { type: UPDATE_LOCKED, goalID, attrName }
);
