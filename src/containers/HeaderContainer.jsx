import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { auth, ui, router } from '../redux';
import Header from '../components/Header';

class HeaderContainer extends Component {
  openSidebar = () => {
    const { openSidebarAction } = this.props;
    openSidebarAction();
  }
  signOut = () => {
    const { signOutAction } = this.props;
    signOutAction();
  }

  push = (href) => {
    const { pushAction } = this.props;
    pushAction(href);
  }

  render() {
    const { isAuthenticated } = this.props;
    return (
      <Header
        openSidebarFn={this.openSidebar}
        isAuthenticated={isAuthenticated}
        signOutFn={this.signOut}
        pushFn={this.push}
      />
    );
  }
}

HeaderContainer.propTypes = {
  /** required */
  openSidebarAction: PropTypes.func.isRequired,
  pushAction: PropTypes.func.isRequired,
  signOutAction: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: auth.selectors.isAuthenticated,
});

const mapDispatchToProps = {
  openSidebarAction: ui.actions.openSidebar,
  pushAction: router.actions.push,
  signOutAction: auth.actions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
