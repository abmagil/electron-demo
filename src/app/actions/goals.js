import defaults from 'lodash/fp/defaults';

import {
  ADD_GOAL,
  REMOVE_GOAL,
  GOAL_MOVE_UP,
  GOAL_MOVE_DOWN
} from '../constants/ActionTypes';

function defaultedStartTime(goal) {
  return defaults({ 'startingYear': new Date() }, goal);
}

const addGoal = (goal) => ({ type: ADD_GOAL, goal: defaultedStartTime(goal) });
const moveUp = (id) => ({ type: GOAL_MOVE_UP, id});
const moveDown = (id) => ({ type: GOAL_MOVE_DOWN, id});
const removeGoal = (id) => ({ type: REMOVE_GOAL, id });

export {
  addGoal,
  moveUp,
  moveDown,
  removeGoal
};
