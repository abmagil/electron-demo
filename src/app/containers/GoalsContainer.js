import { connect } from 'react-redux';
import GoalsTable from '../components/GoalsTable';
import {addGoal} from '../actions/goals';
import partialToWhole from '../utils/partial-to-complete-goal';

import { orderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  orderedGoals: orderedGoalsFrom(state),
});

const mapDispatchToProps = (dispatch) => ({
  maybeAddGoal: ({type, goalTotal, deadlineYear, spendingPerMonth}) => {
    dispatch(
      addGoal({
        goalTotal: parseInt(goalTotal),
        deadlineYear: parseInt(deadlineYear),
        spendingPerMonth: parseInt(spendingPerMonth),
        type,
      })
    );
  },
  makeGoalComplete: partialToWhole,
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable);
