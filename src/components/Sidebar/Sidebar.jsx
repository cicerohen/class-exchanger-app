import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaClose } from 'react-icons/lib/fa';
import Anchor from '../Anchor';
import ListItemWithAvatar from '../ListItemWithAvatar';
import Style from './style/Sidebar.scss';

class Sidebar extends Component {
  render() {
    const {
      sidebarTitle, closeSidebarFn, children,
    } = this.props;
    return (
      <aside className={Style.root}>
        <div className={Style.container}>
          <div className={Style.sidebarHeaderContainer}>
            <Anchor>{sidebarTitle}</Anchor>
            <Anchor onClick={closeSidebarFn} title="Close sidebar"><FaClose /></Anchor>
          </div>
          <div className={Style.sidebarBodyContainer}>
            <ListItemWithAvatar
              avatarUrl="https://avatars3.githubusercontent.com/u/819041?s=400&u=e2358cf39d3d95c7603c19f6a23de0c0619e984d&v=4/"
            >
              <div className={Style.user_info}>
                <h3>Cícero Viana</h3>
                <p>cicerohen@gmail.com</p>
              </div>
            </ListItemWithAvatar>
            {children}
          </div>
          <div className={Style.sidebarFooterContainer}>
            {'footer'}
          </div>
        </div>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  sidebarTitle: PropTypes.string.isRequired,
  closeSidebarFn: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Sidebar;
