// @flow
import {UPDATE_SPENDING} from '../constants/ActionTypes';

export default function spending(state: ObjectOf<number> = {}, action: UpdateSpendingAction): ObjectOf<number> {
  if (action.type === UPDATE_SPENDING) {
    return {
      ...state,
      [action.name]: action.value,
    };
  }
  return state;
}
