import { connect } from 'react-redux';
import AvailableCash from '../components/AvailableCash';

import { availableCashFrom } from '../reducers/available-cash';
import { totalGoalSpendingFrom } from '../reducers/goals';
import setAvailableCash from '../actions/available-cash';
import spendingSummary from '../utils/spending-summary';

const mapStateToProps = (state) => ({
  availableCash: availableCashFrom(state),
  spendingSummary: spendingSummary(totalGoalSpendingFrom(state) / availableCashFrom(state))
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateHandler: (event) => {
      dispatch(setAvailableCash(Number(event.target.value)));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvailableCash);
