import { connect } from 'react-redux';
import OverTimeDisplay from '../components/OverTimeDisplay';
import { completionOrderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  completionOrderedGoals: completionOrderedGoalsFrom(state)
});

export default connect(mapStateToProps, {})(OverTimeDisplay);
