// @flow
import { UPDATE_CASH } from '../constants/ActionTypes';

const availableCash = (state: number = 0, action: UpdateCashAction): number => {
  const { availableCash } = action;
  switch (action.type) {
  case UPDATE_CASH:
    return availableCash;
  default:
    return state;
  }
};

export default availableCash;
export const availableCashFrom = (state: StateShape): number => (state.availableCash);
