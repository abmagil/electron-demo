import React from 'react';
import PropTypes from 'prop-types';
import * as Jubilation from 'jubilation';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import GoalRow from '../GoalRow';
import detailsToMonthlySpendingArray from '../../utils/goal-to-monthly-spending-array';

import './OverTimeDisplay.scss';

const {
  JubilationChart,
  JubilationLineChart,
  XAxis,
} = Jubilation;

const {
  arrayOf,
} = PropTypes;

const spendingArrayToData = (monthlySpending, idx) => ({ x: idx, y: monthlySpending });
const categorizeDeadline = (goal) => {
  const endingDecade = Math.floor((goal.deadlineYear - moment().year()) / 10);
  switch (endingDecade) {
  case 0: {
    return 'immediateGoals';
  }
  case 1: {
    return 'nearTermGoals';
  }
  default:
    return 'longTermGoals';
  }
};

/* eslint-disable */
const OvertimePlotForGoal = ({goal}) => {
  const chartData = detailsToMonthlySpendingArray(goal).map(spendingArrayToData);

  return (
    <JubilationLineChart
      data={chartData}
    />
  );
};
/* eslint-enable */

const OverTimeDisplay = ({completionOrderedGoals}) => {
  const {
    immediateGoals,
    nearTermGoals,
    longTermGoals,
  } = groupBy(completionOrderedGoals, categorizeDeadline);

  return (
    <div className='overTimeDisplay'>
      <JubilationChart height={300} width={600} >
        {immediateGoals && immediateGoals.map((goal) => {
          return <OvertimePlotForGoal goal={goal} key={goal.id} />;
        })}
        <XAxis numTicks={0} title={'0 decades out'} />
      </JubilationChart>
      <JubilationChart height={300} width={600} >
        {nearTermGoals && nearTermGoals.map((goal) => {
          return <OvertimePlotForGoal goal={goal} key={goal.id} />;
        })}
        <XAxis numTicks={0} title={'1 decade out'} />
      </JubilationChart>
      <JubilationChart height={300} width={600} >
        {longTermGoals && longTermGoals.map((goal) => {
          return <OvertimePlotForGoal goal={goal} key={goal.id} />;
        })}
        <XAxis numTicks={0} title={'2 decades out'} />
      </JubilationChart>
    </div>
  );
};

OverTimeDisplay.propTypes = {
  completionOrderedGoals: arrayOf(GoalRow.propTypes['goal']).isRequired,
};

export default OverTimeDisplay;
