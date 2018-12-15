import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Switch } from 'react-router-dom';
import { getHistory } from '../utils';
import { pathTypes } from '../firebase';
import { firebase } from '../redux';
import RouteContainer from './RouteContainer';
import HomeContainer from './pages/HomeContainer';
import SignInContainer from './pages/SignInContainer';
import SignUpContainer from './pages/SignUpContainer';
import MeContainer from './pages/MeContainer';

class App extends Component {
  componentDidMount = () => {
    const { addListenerAction } = this.props;
    addListenerAction(pathTypes.EXCHANGES);
  }
  render() {
    return (
      <Fragment>
        <Router history={getHistory()}>
          <Switch>
            <RouteContainer exact path="/" component={HomeContainer} />
            <RouteContainer exact path="/signin" component={SignInContainer} />
            <RouteContainer exact path="/signup" component={SignUpContainer} />
            <RouteContainer isProtected exact path="/me" component={MeContainer} />
            {/*
            <RouteContainer exact path="/exchanges" component={Exchanges} />
            <RouteContainer exact path="/exchanges/new" component={ExchangeNew} />
            <RouteContainer exact path="/exchanges/:exchangeId" component={Exchange} /> */}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

App.propTypes = {
  addListenerAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addListenerAction: firebase.actions.addListener,
};

export default connect(null, mapDispatchToProps)(App);
