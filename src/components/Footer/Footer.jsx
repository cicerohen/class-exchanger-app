import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Footer.scss';

const Footer = ({ children }) => (
  <div className={Style.root}>
    <div className={Style.container}>
      {children}
    </div>
  </div>
);

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Footer;
