import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route as ReactRoute, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, router } from '../redux';

class RouteContainer extends Component {
  render() {
    const {
      isProtected, isAuthenticating, isAuthenticated,
      location, previousRoute, ...others
    } = this.props;
    if (isAuthenticating) {
      return (<div>Loading</div>);
    }
    if (isAuthenticated && (location.pathname === '/signin' || location.pathname === '/signup')) {
      return (<Redirect to={previousRoute.get('pathname')} />);
    }
    if (!isAuthenticated && isProtected) {
      return (<Redirect to="/signin" />);
    }
    return (<ReactRoute {...others} />);
  }
}

RouteContainer.defaultProps = {
  isProtected: false,
  isAuthenticated: false,
  isAuthenticating: false,
};

RouteContainer.propTypes = {
  isProtected: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  isAuthenticating: PropTypes.bool,
  location: PropTypes.shape({
    pathname: PropTypes.any.isRequired,
  }).isRequired,
  previousRoute: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticating: auth.selectors.isAuthenticating,
  isAuthenticated: auth.selectors.isAuthenticated,
  previousRoute: router.selectors.getPreviousRoute,
});

export default connect(mapStateToProps)(RouteContainer);
