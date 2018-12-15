import React from 'react';
import PropTypes from 'prop-types';
import Style from './style/List.scss';

const List = ({ style, children }) => (
  <ul className={style.root}>
    { children }
  </ul>
);

List.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

List.defaultProps = {
  style: Style,
};

export default List;
