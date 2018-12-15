import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/lib/fa';
import Menu from '../Menu';
import MenuItem from '../MenuItem';
import menuStyle from '../Menu/style/Menu.scss';
import menuItemStyle from '../MenuItem/style/MenuItem.scss';

import Style from './style/Header.scss';

class Header extends Component {
  goToMe = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('me');
  }

  goToHome = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('/');
  }

  goToSignIn = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('signin');
  }

  goToSignUp = (e) => {
    const { pushFn } = this.props;
    e.preventDefault();
    pushFn('signup');
  }

  signOut = (e) => {
    const { signOutFn } = this.props;
    e.preventDefault();
    signOutFn();
  }

  openSidebar = (e) => {
    const { openSidebarFn } = this.props;
    e.preventDefault();
    openSidebarFn();
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <header className={Style.root}>
        <div className={Style.container}>
          <div className={Style.contentLeftContainer}>
            <Menu style={{ ...menuStyle, root: Style.menu__root }}>
              <MenuItem
                onClick={this.openSidebar}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                <FaBars />
              </MenuItem>
              <MenuItem
                href="/"
                onClick={this.goToHome}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Home
              </MenuItem>
            </Menu>
          </div>
          <div className={Style.contentRightContainer}>
            {
              isAuthenticated &&
              <MenuItem
                href="me"
                onClick={this.goToMe}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Me
              </MenuItem>
            }
            {
              isAuthenticated &&
              <MenuItem
                onClick={this.signOut}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Sign Out
              </MenuItem>
            }
            {
              !isAuthenticated &&
              <MenuItem
                href="signin"
                onClick={this.goToSignIn}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Sign In
              </MenuItem>
            }
            {
              !isAuthenticated &&
              <MenuItem
                href="signup"
                onClick={this.goToSignUp}
                style={{ ...menuItemStyle, container: Style.menuItem__container }}
              >
                Sign Up
              </MenuItem>
            }
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  pushFn: PropTypes.func.isRequired,
  openSidebarFn: PropTypes.func.isRequired,
  signOutFn: PropTypes.func.isRequired,
};

export default Header;
