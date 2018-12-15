import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/MenuItem.scss';

const MenuItem = ({
  children, href, title, onClick, style,
}) => (
  <li className={style.root}>
    <a className={style.container} href={href} title={title} onClick={onClick}>
      { children }
    </a>
  </li>
);

MenuItem.defaultProps = {
  href: '#',
  onClick: undefined,
  title: undefined,
  style: Style,
};

MenuItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default MenuItem;
