import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { ui } from '../redux';
import View from '../components/View';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import FooterContainer from './FooterContainer';

class ViewContainer extends PureComponent {
  closeSidebar = () => {
    const { closeSidebarAction } = this.props;
    closeSidebarAction();
  }

  renderHeader = () => {
    const { header } = this.props;
    return (header || <HeaderContainer />);
  }

  renderSidebar = () => {
    const { sidebar } = this.props;
    return (sidebar || <SidebarContainer />);
  }

  renderFooter = () => {
    const { footer } = this.props;
    return (footer || <FooterContainer />);
  };

  render() {
    const {
      sidebarIsOpen, children, header, sidebar, footer, ...others
    } = this.props;
    return (
      <View
        header={this.renderHeader()}
        sidebar={this.renderSidebar()}
        footer={this.renderFooter()}
        sidebarIsOpen={sidebarIsOpen}
        closeSidebarFn={this.closeSidebar}
        {...others}
      >
        {children}
      </View>
    );
  }
}

ViewContainer.propTypes = {
  /** optional */
  header: PropTypes.node,
  sidebar: PropTypes.node,
  footer: PropTypes.node,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** required */
  sidebarIsOpen: PropTypes.bool.isRequired,
  closeSidebarAction: PropTypes.func.isRequired,
};

ViewContainer.defaultProps = {
  header: undefined,
  sidebar: undefined,
  footer: undefined,
  children: undefined,
};

const mapStateToProps = createStructuredSelector({
  sidebarIsOpen: ui.selectors.sidebarIsOpen,
});

const mapDispatchToProps = {
  closeSidebarAction: ui.actions.closeSidebar,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
