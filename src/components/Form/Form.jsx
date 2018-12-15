import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Form.scss';

const Form = ({
  children, onSubmit, disabled, style,
}) => (
  <form onSubmit={onSubmit} className={style.root}>
    <fieldset disabled={disabled} className={style.container}>{ children }</fieldset>
  </form>
);

Form.defaultProps = {
  style: Style,
};

Form.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
