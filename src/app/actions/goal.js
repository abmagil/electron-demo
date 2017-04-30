import { UPDATE_GOAL, UPDATE_LOCKED } from '../constants/ActionTypes';

const updateGoal = ({ goalID, attrName, newVal, startTime=new Date() }) => (
  {type: UPDATE_GOAL, startTime, attrName, newVal, goalID }
);

const updateLocked = ({ goalID, attrName }) => (
  { type: UPDATE_LOCKED, goalID, attrName }
);

export {
  updateGoal,
  updateLocked,
};
