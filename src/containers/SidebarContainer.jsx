import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ui } from '../redux';
import Sidebar from '../components/Sidebar';

class SidebarContainer extends Component {
  closeSidebar = () => {
    const { closeSidebarAction } = this.props;
    closeSidebarAction();
  }

  render() {
    return (
      <Sidebar
        sidebarTitle="Sidebar Title"
        closeSidebarFn={this.closeSidebar}
      >
        {'dsds'}
      </Sidebar>
    );
  }
}

SidebarContainer.propTypes = {
  closeSidebarAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  closeSidebarAction: ui.actions.closeSidebar,
};

export default connect(null, mapDispatchToProps)(SidebarContainer);
