import { UPDATE_GOAL, UPDATE_LOCKED, ADD_GOAL } from '../constants/ActionTypes';

export const updateGoal = ({ goalID, attrName, newVal }) => (
  {type: UPDATE_GOAL, attrName, newVal, goalID }
);

export const updateLocked = ({ goalID, attrName }) => (
  { type: UPDATE_LOCKED, goalID, attrName }
);
