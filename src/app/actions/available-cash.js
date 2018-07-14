// @flow
import { UPDATE_CASH } from '../constants/ActionTypes';

const setAvailableCash = (availableCash: number): UpdateCashAction => ({type: UPDATE_CASH, availableCash});

export default setAvailableCash;
