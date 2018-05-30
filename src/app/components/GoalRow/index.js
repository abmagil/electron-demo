import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import ActionButton from './ActionButton';
import GoalAttrContainer from '../../containers/GoalAttrContainer';
import './GoalRow.scss';


const {
  func,
  number,
  string,
  shape,
} = PropTypes;

const GoalRow = ({ goal,spendingSummary, onUpClick, onDownClick }) => (
  <tr className={classNames(['goalRow', spendingSummary])}>
    <td className='cell description'>
      {goal.type}
    </td>
    <GoalAttrContainer attrName={'goalTotal'} goalID={goal.id} />
    <GoalAttrContainer attrName={'deadlineYear'} goalID={goal.id} />
    <GoalAttrContainer attrName={'spendingPerMonth'} goalID={goal.id} />
    <td className='cell move'>
      <ActionButton
        classNames={['up']}
        onClick={() => onUpClick(goal.id)}
        altText='increase priority'
      />
      <ActionButton
        classNames={['down']}
        onClick={() => onDownClick(goal.id)}
        altText='reduce priority'
      />
    </td>
  </tr>
);

GoalRow.propTypes = {
  goal: shape({
    id: string.isRequired,
    goalTotal: number.isRequired,
    deadlineYear: number.isRequired,
    spendingPerMonth: number.isRequired,
  }).isRequired,
  spendingSummary: string.isRequired,
  onUpClick: func.isRequired,
  onDownClick: func.isRequired,
};

export default GoalRow;
