import { connect } from 'react-redux';

import { flatToNested } from '../utils/categories';
import FreeCashCalculator from '../components/FreeCashCalculatorForm';
import {UPDATE_SPENDING} from '../constants/ActionTypes';

const mapStateToProps = (state) => ({
  categories: flatToNested(state.spending),
  spending: state.spending,
});
const mapDispatchToProps = (dispatch) => ({
  updateFn: ({path, e}) => {
    dispatch({
      type: UPDATE_SPENDING,
      name: path,
      value: parseInt(e.target.value, 10),
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FreeCashCalculator);
