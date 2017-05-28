import React from 'react';
import PropTypes from 'prop-types';
import GoalRow from '../GoalRow';

const {
  arrayOf
} = PropTypes;

const OverTimeDisplay = ({completionOrderedGoals}) => {
  return (
    <div>
      {completionOrderedGoals.map((goal) => (goal.type + ' '))}
    </div>
  );
};

OverTimeDisplay.propTypes = {
  completionOrderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired
};

export default OverTimeDisplay;
