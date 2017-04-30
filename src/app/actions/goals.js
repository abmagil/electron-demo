import {
  ADD_GOAL,
  REMOVE_GOAL,
  GOAL_MOVE_UP,
  GOAL_MOVE_DOWN
} from '../constants/ActionTypes';

const addGoal = (goal) => ({ type: ADD_GOAL, goal });
const moveUp = (id) => ({ type: GOAL_MOVE_UP, id});
const moveDown = (id) => ({ type: GOAL_MOVE_DOWN, id});
const removeGoal = (id) => ({ type: REMOVE_GOAL, id });

export {
  addGoal,
  moveUp,
  moveDown,
  removeGoal
};
