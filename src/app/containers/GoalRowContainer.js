import { connect } from 'react-redux';

import GoalRow from '../components/GoalRow';
import { moveUp, moveDown } from '../actions/goals';
import { availableCashFrom } from '../reducers/available-cash';
import spendingSummary from '../utils/spending-summary';

const mapStateToProps = (state, ownProps) => {
  const { goal, spendingToThisGoal } = ownProps;
  return {
    goal,
    spendingSummary: spendingSummary(spendingToThisGoal/ availableCashFrom(state)),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onUpClick: (id) => {
    dispatch(moveUp(id));
  },
  onDownClick: (id) => {
    dispatch(moveDown(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalRow);
