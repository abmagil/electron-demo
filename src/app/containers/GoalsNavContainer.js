import { connect } from 'react-redux';
import GoalsNav from '../components/GoalsNav';
import { orderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  orderedGoals: orderedGoalsFrom(state),
});

export default connect(mapStateToProps, {})(GoalsNav);
