import React from 'react';
import PropTypes from 'prop-types';
import GoalRow from '../GoalRow';
import goalToMonthlySpendingArray from '../../utils/goal-to-monthly-spending-array';

const {
  arrayOf
} = PropTypes;

function displayNumber(number) {
  return number.toFixed(2);
}

/* eslint-disable */
// TEMPORARY IMPL.
const GoalChart = ({goal}) => (
  <div>
    {goal.type} {goalToMonthlySpendingArray(goal).map(displayNumber).slice(0,6).join(' ')}
  </div>
);
/* eslint-enable */

const OverTimeDisplay = ({completionOrderedGoals}) => {
  return (
    <div className='overTimeDisplay'>
      {completionOrderedGoals.map((goal) => (
        <GoalChart goal={goal} key={goal.id} />
      ))}
    </div>
  );
};

OverTimeDisplay.propTypes = {
  completionOrderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired
};

export default OverTimeDisplay;
