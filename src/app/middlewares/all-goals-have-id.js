import uuidV1 from 'uuid/v1';
import { ADD_GOAL } from '../constants/ActionTypes';

// eslint-disable-next-line no-unused-vars
const ensureGoalsHaveIds = store => next => action => {
  // console.log(action);
  // next(action);
  if(action.type === ADD_GOAL) {
    let { goal: newGoal } = action;
    if (!newGoal.id) {
      newGoal.id = uuidV1();
    }
    next({
      ...action,
      goal: newGoal,
    });
  } else {
    next(action);
  }
};

export default ensureGoalsHaveIds;
