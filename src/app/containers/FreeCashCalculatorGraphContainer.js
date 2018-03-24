import { connect } from 'react-redux';

import { flatToNested } from '../utils/categories';
import nestedToSankey from '../utils/nestedToSankey';
import FreeCashCalculatorGraph from '../components/FreeCashCalculatorGraph';

const mapStateToProps = (state) => ({
  data: nestedToSankey(flatToNested(state.spending)),
});
const mapDispatchToProps = (dispatch) => ({
  // update: dispatch(() => {
  //   throw new Error('Whoopsy');
  // }),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreeCashCalculatorGraph);
