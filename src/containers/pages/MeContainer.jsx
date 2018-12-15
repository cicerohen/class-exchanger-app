import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewContainer from '../ViewContainer';

class MeContainer extends Component {
  render() {
    return (
      <ViewContainer title="Me">
        {'dsds'}
      </ViewContainer>
    );
  }
}

export default connect()(MeContainer);

