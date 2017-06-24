import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './AvailableCash.scss';

const AvailableCash = ({ availableCash, spendingSummary, updateHandler }) => (
  <label className={classNames([spendingSummary, 'availableCash'])}>
    Monthly Available Cash
    <input
      type="number"
      value={availableCash}
      onChange={updateHandler}
    />
  </label>  
);

AvailableCash.propTypes = {
  spendingSummary: PropTypes.string.isRequired,
  availableCash: PropTypes.number.isRequired,
  updateHandler: PropTypes.func.isRequired,
};

export default AvailableCash;
