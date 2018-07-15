//@flow

import isFinite from 'lodash/isFinite';

// Ingest a goal, return an array of monthly spending, each index is cumulative

type GoalSpendingType = {goalTotal: number, spendingPerMonth: number}

export default function goalToMonthlySpendingArray({ goalTotal, spendingPerMonth }: GoalSpendingType = {}): Array<number> {
  const isValid = isFinite(goalTotal) && isFinite(spendingPerMonth);

  let spendingArray = [];
  let spentSoFar = 0;
  while (isValid && spentSoFar < goalTotal) {
    spentSoFar = Math.min(spentSoFar + spendingPerMonth, goalTotal);
    spendingArray.push(spentSoFar);
  }

  return spendingArray;
}
