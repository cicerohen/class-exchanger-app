import React from 'react';
import { connect } from 'react-redux';

// Containers
import ExchangeForm from '../../ExchangeForm';
import View from '../../View';

const ExchangeNew = () => (
  <View title="Add a new Exchange">
    <ExchangeForm exchangeId={2000} />
  </View>
);

export default connect()(ExchangeNew);
