import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Style from './style/View.scss';

class View extends Component {
  render() {
    const {
      title, subtitle, header, sidebar, footer,
      sidebarIsOpen, closeSidebarFn, children,
    } = this.props;
    return (
      <div className={Style.root}>
        <div className={Style.container}>
          {
            sidebarIsOpen &&
            <div className={Style.sidebarRoot}>
              <div className={Style.sidebarContainer}>
                {sidebar}
              </div>
              <div className={Style.sidebarBackdrop} onClick={closeSidebarFn} />
            </div>
          }
          <div>
            <div className={Style.headerContainer}>
              {header}
            </div>
            <main className={Style.mainContainer}>
              <h2 className={Style.viewTitle}>{title}</h2>
              {
                subtitle && <div className={Style.subtitleContainer}>{subtitle}</div>
              }
              {children}
            </main>
            <div className={Style.footerContainer}>
              {footer}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

View.propTypes = {
  // required
  title: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
  closeSidebarFn: PropTypes.func.isRequired,
  // optional
  subtitle: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

View.defaultProps = {
  subtitle: '',
  children: undefined,
};

export default View;
