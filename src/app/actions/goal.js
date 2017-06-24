import { UPDATE_GOAL, UPDATE_LOCKED } from '../constants/ActionTypes';

const updateGoal = ({ goalID, attrName, newVal }) => (
  {type: UPDATE_GOAL, attrName, newVal, goalID }
);

const updateLocked = ({ goalID, attrName }) => (
  { type: UPDATE_LOCKED, goalID, attrName }
);

export default {
  updateGoal,
  updateLocked,
};
