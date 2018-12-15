import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from '../components/Footer';

class FooterContainer extends Component {
  render() {
    return (
      <Footer>
        {'Footer'}
      </Footer>
    );
  }
}

export default connect()(FooterContainer);
