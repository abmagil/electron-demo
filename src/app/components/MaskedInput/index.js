/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/identity';

const MaskedInput = ({validatorFn, value, type, ...cleanedProps}) => (
  <input {...cleanedProps} type={type} value={validatorFn(value)} />
);

MaskedInput.propTypes = {
  validatorFn: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

MaskedInput.defaultProps = {
  validatorFn: identity
};

export default MaskedInput;
/* eslint-enable */
