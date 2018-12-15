import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Menu.scss';

const Menu = ({ children, style }) => (
  <ul className={style.root}>
    {children}
  </ul>
);

Menu.defaultProps = {
  style: Style,
};

Menu.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Menu;
