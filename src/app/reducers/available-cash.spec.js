import availableCash from './available-cash';
import { UPDATE_CASH } from '../constants/ActionTypes';

describe('reducers', () => {
  describe('availableCash', () => {
    it('should handle the UPDATE_CASH action', () => {
      expect(availableCash({}, { type: `${UPDATE_CASH}`, availableCash: 400 })).toEqual(400)
    })
  })
})
