import React from 'react';
import { connect } from 'react-redux';

// Containers
import ExchangesList from '../../ExchangesList';
import View from '../../View';

const Exchanges = () => (
  <View title="Exchanges">
    <ExchangesList />
  </View>
);

export default connect()(Exchanges);
