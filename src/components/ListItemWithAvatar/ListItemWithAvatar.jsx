import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import Avatar from '../Avatar';
import AvatarStyle from '../Avatar/style/Avatar.scss';
import ListItemStyle from '../ListItem/style/ListItem.scss';
import Style from './style/ListItemWithAvatar.scss';

const ListItemWithAvatar = ({
  style, children, avatarUrl, ...others
}) => (
  <ListItem
    style={{ ...ListItemStyle, root: style.root, container: style.container }}
    {...others}
  >
    <Avatar src={avatarUrl} style={{ ...AvatarStyle, root: style.avatar__root }} />
    <div className={style.body}>{ children }</div>
  </ListItem>
);

ListItemWithAvatar.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

ListItemWithAvatar.defaultProps = {
  style: Style,
};

export default ListItemWithAvatar;
