import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Label.scss';

const Label = ({
  text, size, style, removeLabel,
}) => (
  <span className={`${style.base} ${style[size]}`}>
    { text }
    { removeLabel && <span className={style.remove_icon} onClick={removeLabel}>x</span> }
  </span>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  style: PropTypes.objectOf(PropTypes.any),
  removeLabel: PropTypes.func,
};

Label.defaultProps = {
  size: 'small',
  style: Style,
  removeLabel: () => {},
};

export default Label;
