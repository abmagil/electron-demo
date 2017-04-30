import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import GoalAttrContainer from '../../containers/GoalAttrContainer';
import './GoalRow.scss';

const {
  func,
  number,
  string,
  shape
} = PropTypes;

const GoalRow = ({ goal,spendingSummary, onUpClick, onDownClick }) => (
  <tr className={classNames(['goalRow', spendingSummary])}>
    <td className='cell description'>
      {goal.type}
    </td>
    <GoalAttrContainer attrName={'goalTotal'} goalID={goal.id} />
    <GoalAttrContainer attrName={'deadlineYear'} goalID={goal.id} />
    <GoalAttrContainer attrName={'spendingPerMonth'} goalID={goal.id} />
    <td className='cell'>
      <button
        className='actionButton up'
        onClick={() => onUpClick(goal.id)}
      >
        Up
      </button>
      <button
        className='actionButton down'
        onClick={() => onDownClick(goal.id)}
      >
        Down
      </button>
    </td>
  </tr>
);

GoalRow.propTypes = {
  goal: shape({
    id: number.isRequired,
    goalTotal: number.isRequired,
    deadlineYear: number.isRequired,
    spendingPerMonth: number.isRequired
  }).isRequired,
  spendingSummary: string.isRequired,
  onUpClick: func.isRequired,
  onDownClick: func.isRequired
};

export default GoalRow;
