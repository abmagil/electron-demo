import { connect } from 'react-redux';
import GoalsTable from '../components/GoalsTable';

import { orderedGoalsFrom } from '../reducers/goals';

const mapStateToProps = (state) => ({
  orderedGoals: orderedGoalsFrom(state),
});

export default connect(mapStateToProps, {})(GoalsTable);
