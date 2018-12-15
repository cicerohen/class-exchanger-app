import React from 'react';
import PropTypes from 'prop-types';
import componentStyle from './style/ListItem.scss';

const ListItem = ({
  style, children, onClick,
}) => (
  <li
    className={`${style.root} ${onClick ? style.clickable : ''}`}
    onClick={onClick}
  >
    <div className={style.container}>
      { children }
    </div>
  </li>
);

ListItem.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListItem.defaultProps = {
  style: componentStyle,
  onClick: undefined,
};

export default ListItem;
