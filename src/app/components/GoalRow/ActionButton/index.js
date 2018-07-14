import React from 'react';
import PropTypes from 'prop-types';
import classNamesLib from 'classnames';

// import Chevron from '../../../assets/svg/chevron.svg';
import './ActionButton.scss';

const Chevron = () => (<svg />);

const ActionButton = ({onClick, altText, classNames=['']}) => {
  const btnClass = classNamesLib('actionButton', ...classNames);

  return (
    <button
      className={btnClass}
      onClick={onClick}
    >
      {altText}
      <Chevron alt={altText} />
    </button>
  );
};

ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  altText: PropTypes.string.isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ActionButton;
