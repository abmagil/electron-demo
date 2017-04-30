import goals from './goals';
import * as actions from '../constants/ActionTypes';

describe('reducers', () => {
  describe('goals', () => {

    it('should include a default state', () => {
      const initialState = {};
      expect(goals(undefined, {})).toEqual(initialState);
    });

    it(`should handle ${actions.ADD_GOAL} action for a goal`, () => {
      expect(goals({}, {
        type: `${actions.ADD_GOAL}`, goal: { id: 1, type: 'Emergency Goal', total: 100, deadline: 1999, spendingPerMonth: 15 }
      })).toEqual({
        "1": { id: 1, type: 'Emergency Goal', total: 100, deadline: 1999, spendingPerMonth: 15}
      })
    });

    describe(`on an ${actions.UPDATE_GOAL} action`, () => {
      describe('for an outlay-locked goal', () => {
        const outlayLockedGoal = {
          '3': {
            id: 3,
            type: 'Car Goal',
            goalTotal: 240,
            startingYear: new Date(2020, 0, 1),
            deadlineYear: 2022,
            spendingPerMonth: 10,
            lockedAttr: 'spendingPerMonth'
          }
        };

        it(`should change goalTotal and adjust deadlineYear`, () => {
          const newState = goals(outlayLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            attrName: 'goalTotal',
            newVal: 480,
            goalID: 3
          });

          expect(newState['3']).toEqual({
            ...outlayLockedGoal['3'],
            goalTotal: 480,
            deadlineYear: 2024
          })
        })
        it(`should change goalTotal and adjust deadlineYear`, () => {
          const newState = goals(outlayLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            newVal: 2021,
            attrName: 'deadlineYear',
            goalID: 3
          });

          expect(newState['3']).toEqual({
            ...outlayLockedGoal['3'],
            goalTotal: 120,
            deadlineYear: 2021,
          })
        })
      })

      describe('for a total-locked goal', () => {
        const totalLockedGoal = {
          '1': {
            id: 1,
            type: 'Education Goal',
            goalTotal: 240,
            startingYear: 2020,
            deadlineYear: 2022,
            spendingPerMonth: 10,
            lockedAttr: 'goalTotal'
          }
        };

        it(`should change deadlineYear and adjust the spendingPerMonth`, () => {
          const newState = goals(totalLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            attrName: 'deadlineYear',
            newVal: 2021,
            goalID: 1
          });

          expect(newState['1']['deadlineYear']).toEqual(2021);
          expect(newState['1']['spendingPerMonth']).toEqual(20);
        });
        it(`should change spendingPerMonth and adjust deadlineYear`, () => {
          const newState = goals(totalLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            attrName: 'spendingPerMonth',
            newVal: 20,
            goalID: 1
          });

          expect(newState['1']['deadlineYear']).toEqual(2021);
          expect(newState['1']['spendingPerMonth']).toBe(20);
        })
      })

      describe('for a deadline-locked goal', () => {
        const deadlineLockedGoal = {
          '2': {
            id: 2,
            type: 'Travel Goal',
            total: 240,
            startingYear: 2020,
            deadlineYear: 2022,
            spendingPerMonth: 10,
            lockedAttr: 'deadlineYear'
          }
        };

        it(`should change spendingPerMonth and adjust goalTotal`, () => {
          const newState = goals(deadlineLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            attrName: 'spendingPerMonth',
            newVal: 20,
            goalID: 2
          });

          expect(newState['2']).toEqual({
            ...deadlineLockedGoal['2'],
            spendingPerMonth: 20,
            goalTotal: 480
          });
        })
        it(`should change goalTotal and adjust the spendingPerMonth`, () => {
          const newState = goals(deadlineLockedGoal, {
            type: `${actions.UPDATE_GOAL}`,
            attrName: 'goalTotal',
            newVal: 120,
            goalID: 2
          });

          expect(newState['2']).toEqual({
            ...deadlineLockedGoal['2'],
            spendingPerMonth: 5,
            goalTotal: 120
          });
        })
      })
    });

    describe(`on an ${actions.UPDATE_LOCKED} action`, () => {
      it('should set reset the locked attribute for the given goal', () => {
        const initialState = {
          '1': {
            id: 1,
            lockedAttr: 'spendingPerMonth'
          }
        };

        const newState = goals(initialState, {
          type: actions.UPDATE_LOCKED,
          goalID: 1,
          attrName: 'deadlineYear',
        });

        expect(newState['1']).toEqual({
          ...initialState['1'],
          lockedAttr: 'deadlineYear',
        });
      })
    });
  })
})
