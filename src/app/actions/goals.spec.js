import { addGoal } from './goals';

describe('addGoal', () => {
  it('should return a valid goal in the \'goal\' attribute', () => {
    const fullGoal = {
      id: 1,
      type: 'Emergency Goal',
      goalTotal: 120,
      startingYear: 1998,
      deadlineYear: 1999,
      spendingPerMonth: 15
    };

    expect(addGoal(fullGoal).goal).toEqual(fullGoal);
  });

  it('should default the current year as the startingYear',() => {
    expect(addGoal({}).goal).toEqual({ startingYear: new Date() });
  });
});
