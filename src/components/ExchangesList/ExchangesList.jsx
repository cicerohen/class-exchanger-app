import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExchangeItem from '../ExchangesListItem';
import Style from './style/ExchangesList.scss';

class ExchangesList extends Component {
  renderExchange = (exchange, key) => (
    <ExchangeItem
      key={key}
      fromSemester={exchange.fromSemester}
      fromWeekDays={exchange.fromWeekDays}
      fromTime={exchange.fromTime}
      toSemester={exchange.toSemester}
      toWeekDays={exchange.toWeekDays}
      toTime={exchange.toTime}
    />
  )
  render() {
    const { exchanges } = this.props;
    return (
      <ul className={Style.root}>
        {
          exchanges.map((item, i) => this.renderExchange(item, i)).reduce((acc, curr) => {
            acc.push(curr);
            return acc;
          }, [])
        }
      </ul>
    );
  }
}

ExchangesList.propTypes = {
  exchanges: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ExchangesList;
