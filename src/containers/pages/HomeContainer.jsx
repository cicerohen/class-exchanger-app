import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ViewContainer from '../ViewContainer';
import ExchangesList from '../../components/ExchangesList';

const exchangesArray = [{
  fromSemester: 1,
  fromWeekDays: 'seg/qua',
  fromTime: '20:00',
  toSemester: 2,
  toWeekDays: 'ter/qui',
  toTime: '20:00',
},
{
  fromSemester: 1,
  fromWeekDays: 'seg/qua',
  fromTime: '20:00',
  toSemester: 2,
  toWeekDays: 'ter/qui',
  toTime: '20:00',
}];

class HomeContainer extends Component {
  render() {
    const { exchanges } = this.props;
    return (
      <ViewContainer title="Home">
        <ExchangesList exchanges={exchanges} />
      </ViewContainer>
    );
  }
}

HomeContainer.defaultProps = {
  exchanges: exchangesArray,
};

HomeContainer.propTypes = {
  exchanges: PropTypes.arrayOf(PropTypes.object),
};


export default connect()(HomeContainer);
