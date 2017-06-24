import React from 'react';
import GoalList from '../GoalList';
import cdf from '../../utils/cdf';
import './GoalsTable.scss';

const cumulativeGoalSpendingFor = (goals) => (
  cdf(goals.map((goal) => (goal.spendingPerMonth)))
);

class GoalsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cumulativeGoalSpending: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const { orderedGoals } = nextProps;
    this.state = {
      cumulativeGoalSpending: cumulativeGoalSpendingFor(orderedGoals),
    };
  }

  render() {
    const { orderedGoals } = this.props;
    const { cumulativeGoalSpending } = this.state;
    
    return (
      <table className='goalsTable'>
        <thead className='goalsTable__header'>
          <tr>
            <td>Description</td>
            <td>Cost</td>
            <td>Deadline</td>
            <td>Monthly Cost</td>
            <td>Move</td>
          </tr>
        </thead>
        <GoalList
          orderedGoals={orderedGoals}
          cumulativeGoalSpending={cumulativeGoalSpending}
        />
        <tfoot>
          <tr>
            <td colSpan="3" />
            <td readOnly className='goalsTable__total'>
              {cumulativeGoalSpending[orderedGoals.length - 1] || 0}
            </td>
            <td />
          </tr>
        </tfoot>
      </table>
    );
  }
}

GoalsTable.propTypes = {
  orderedGoals: GoalList.propTypes.orderedGoals,
};

GoalsTable.defaultProps = {
  orderedGoals: [],
};

export default GoalsTable;
