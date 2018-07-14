// @flow
import defaults from 'lodash/fp/defaults';

import {
  ADD_GOAL,
  REMOVE_GOAL,
  GOAL_MOVE_UP,
  GOAL_MOVE_DOWN
} from '../constants/ActionTypes';
// import { Goal, AddGoalAction, MoveGoalDownAction, RemoveGoalAction } from '../../flow-typed';

function defaultedStartTime(goal: Goal): Goal {
  return defaults({ 'startingYear': new Date() }, goal);
}

const addGoal = (goal: Goal): AddGoalAction => ({ type: ADD_GOAL, goal: defaultedStartTime(goal) });
const moveUp = (id: string): MoveGoalUpAction => ({ type: GOAL_MOVE_UP, id});
const moveDown = (id: string): MoveGoalDownAction => ({ type: GOAL_MOVE_DOWN, id});
const removeGoal = (id: string): RemoveGoalAction => ({ type: REMOVE_GOAL, id });

export {
  addGoal,
  moveUp,
  moveDown,
  removeGoal
};
