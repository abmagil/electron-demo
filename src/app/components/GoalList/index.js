import React from 'react';
import PropTypes from 'prop-types';
import GoalRowContainer from '../../containers/GoalRowContainer';
import GoalRow from '../GoalRow';

const {
  arrayOf,
  number,
 } = PropTypes;

const GoalList = ({ orderedGoals, cumulativeGoalSpending, children }) => (
  <tbody>
    {children}
    {orderedGoals.map((goal, idx) => (
      <GoalRowContainer
        goal={goal}
        spendingToThisGoal={cumulativeGoalSpending[idx]}
        key={goal.id}
      />
    ))}
  </tbody>
);

GoalList.propTypes = {
  cumulativeGoalSpending: arrayOf(number),
  orderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired,
};

GoalList.defaultProps = {
  cumulativeGoalSpending: [],
};

export default GoalList;
