import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/Avatar.scss';

const Avatar = ({ src, style }) => (
  <div className={style.root}>
    <img src={src} className={Style.image} alt="" />
  </div>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

Avatar.defaultProps = {
  style: Style,
};

export default Avatar;
