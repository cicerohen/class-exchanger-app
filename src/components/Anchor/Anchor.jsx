import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Anchor.scss';

const Anchor = ({
  href, onClick, title, children, style,
}) => (
  <a className={style.root} href={href} onClick={onClick} title={title}>
    { children }
  </a>
);

Anchor.defaultProps = {
  href: '#',
  title: undefined,
  onClick: undefined,
  style: Style,
};

Anchor.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Anchor;
