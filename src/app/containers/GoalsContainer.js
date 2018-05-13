import { connect } from 'react-redux';
import GoalsTable from '../components/GoalsTable';
import {addGoal} from '../actions/goals';

import { orderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  orderedGoals: orderedGoalsFrom(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  maybeAddGoal: ({description, cost, deadline, monthlyCost}) => {
    addGoal()
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalsTable);
