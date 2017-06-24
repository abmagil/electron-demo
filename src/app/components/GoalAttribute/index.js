/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import DebouncedComponent from '../DebouncedComponent';
import NumericInput from '../NumericInput';
import './GoalAttribute.scss';

const GoalAttribute = ({ isLocked, value, lockedHandler, updateHandler }) => {
  return (
    <td className='cell'>
      <div className='goalAttribute'>
        {isLocked
          ? <p>{value}</p>
          : (
            <div>
              <img className='lock' alt='' onClick={lockedHandler} />
              <DebouncedComponent debouncePeriod={1000}>
                <NumericInput
                  className='editable'
                  value={value}
                  onChange={updateHandler}
                  onDoubleClick={lockedHandler}
                />
              </DebouncedComponent>
            </div>
            )
        }
      </div>
    </td>
  );
};

GoalAttribute.propTypes = {
  isLocked: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
  lockedHandler: PropTypes.func.isRequired,
  updateHandler: PropTypes.func.isRequired,
};

export default GoalAttribute;
/* eslint-enable */
