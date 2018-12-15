import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Input.scss';

const Input = ({
  input, name, meta, type, disabled, label, value, style,
}) => {
  const inputProps = {
    name, type, disabled, value, ...input,
  };
  const classNames = `
    ${style.root}
    ${meta && meta.touched && meta.invalid && style.invalid ? style.invalid : ''}
    ${meta && meta.touched && meta.error && style.error ? style.error : ''}
  `;
  return (
    <div className={classNames}>
      <div className={style.container}>
        { label && <label htmlFor={input.name}>{label}</label> }
        <input {...inputProps} />
        { meta && meta.touched && <span> {meta.warning || meta.error } </span> }
      </div>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  name: PropTypes.string,
  meta: PropTypes.objectOf(PropTypes.any),
  type: PropTypes.oneOf([
    'text',
    'button',
    'submit',
    'password',
  ]).isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
};

Input.defaultProps = {
  style: Style,
  input: {
    name: '',
  },
  name: '',
  meta: {},
  disabled: false,
  label: '',
  value: '',
};

export default Input;
