import isFinite from 'lodash/isFinite';

export default function goalToMonthlySpendingArray(goal = {}) {
  const { goalTotal, spendingPerMonth } = goal;
  const isValid = isFinite(goalTotal) && isFinite(spendingPerMonth);

  let spendingArray = [];
  let spentSoFar = 0;
  while (isValid && spentSoFar < goalTotal) {
    spentSoFar = Math.min(spentSoFar + spendingPerMonth, goalTotal);
    spendingArray.push(spentSoFar);
  }

  return spendingArray;
}
