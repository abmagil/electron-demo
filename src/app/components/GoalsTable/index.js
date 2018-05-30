import React from 'react';
import PropTypes from 'prop-types';
import {identity} from 'lodash';
import GoalList from '../GoalList';
import cdf from '../../utils/cdf';
import './GoalsTable.scss';

const { func } = PropTypes;

const cumulativeGoalSpendingFor = (goals) => (
  cdf(goals.map((goal) => (goal.spendingPerMonth)))
);

class GoalsTable extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.props.maybeAddGoal.bind(this);
    const changeHandler = this.props.makeGoalComplete(identity);
    this.onChange = (event) => {
      const { target } = event;
      const newData = changeHandler({
        ...this.state.goalData,
        [target.name]: target.value,
      });
      this.setState({
        goalData: newData,
      });
    };

    this.state = {
      cumulativeGoalSpending: [],
      goalData: {
        type: '',
        goalTotal: '',
        deadlineYear: '',
        spendingPerMonth: '',
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { orderedGoals } = nextProps;
    this.setState({
      cumulativeGoalSpending: cumulativeGoalSpendingFor(orderedGoals),
    });
  }

  render() {
    const { orderedGoals } = this.props;
    const { cumulativeGoalSpending, goalData } = this.state;
    
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
        >
          <tr>
            <td>
              <input
                name="type"
                placeholder="Description" 
                value={goalData.type}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                name="goalTotal"
                placeholder="Cost"
                value={goalData.goalTotal}
                onChange={this.onChange}
                type="number"
              />
            </td>
            <td>
              <input
                name="deadlineYear"
                placeholder="Deadline"
                value={goalData.deadlineYear}
                onChange={this.onChange}
              />
            </td>
            <td>
              <input
                name="spendingPerMonth"
                placeholder="Monthly Cost"
                value={goalData.spendingPerMonth}
                onChange={this.onChange}
              />
            </td>
            <td>
              <button
                onClick={() => this.onClick(goalData)}
              >
                Add
              </button>
            </td>
          </tr>
        </GoalList>
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
  maybeAddGoal: func,
  orderedGoals: GoalList.propTypes.orderedGoals,
};

GoalsTable.defaultProps = {
  orderedGoals: [],
  maybeAddGoal: identity,
};

export default GoalsTable;
