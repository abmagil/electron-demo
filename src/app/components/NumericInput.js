import React from 'react';
import MaskedInput from './MaskedInput';

const NON_NUMERIC_PATTERN = /[^\d.]/gi;

// USE LATER
// const LEADING_DECIMAL = /^\./;
// const DECIMAL_PATTERN = /(.*?)\.(.*)/;

function stripNonNumeric(val) {
  return parseInt(String(val).replace(NON_NUMERIC_PATTERN, ''));
}

const NumericInput = ({...rest}) => (
  <MaskedInput
    validatorFn={stripNonNumeric}
    type="number"
    {...rest}
  />
);

export default NumericInput;
