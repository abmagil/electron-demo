import { UPDATE_CASH } from '../constants/ActionTypes';

const setAvailableCash = (availableCash) => ({type: UPDATE_CASH, availableCash});

export default setAvailableCash;
