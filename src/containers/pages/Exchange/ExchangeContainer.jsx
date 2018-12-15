import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { pathTypes, paths } from '../../../firebase';
import { emptyMap } from '../../../utils';
import { database } from '../../../redux';

// Containers
import ExchangeForm from '../../ExchangeForm';
import View from '../../View';

export class Exchange extends React.Component {
  componentWillMount = () => {
    this.addListeners();
  }

  componentWillUnmount = () => {
    this.removeListeners();
  }

  getExchange = () => {
    const { allExchanges, match } = this.props;
    return allExchanges.get(String(match.params.exchangeId), emptyMap).toJS();
  }

  removeListeners = () => {
    const { removeListenerAction } = this.props;
    removeListenerAction(pathTypes.EXCHANGES, paths.EXCHANGES());
  }

  addListeners = () => {
    const { requestListenerAction } = this.props;
    requestListenerAction(pathTypes.EXCHANGES, paths.EXCHANGES());
  }

  render() {
    const { exchangesIsSync } = this.props;
    return (
      <View title="Exchange">
        { exchangesIsSync && <p>Loading</p> }
        <ExchangeForm initialValues={this.getExchange()} mode="edit" />
      </View>
    );
  }
}

Exchange.propTypes = {
  match: PropTypes.shape.isRequired,
  allExchanges: PropTypes.arrayOf.isRequired,
  exchangesIsSync: PropTypes.bool.isRequired,
  requestListenerAction: PropTypes.func.isRequired,
  removeListenerAction: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  allExchanges: database.selectors.getAllExchanges,
  exchangesIsSync: database.selectors.exchangesIsSync,
});

const mapDispathToProps = {
  requestListenerAction: database.actions.requestListener,
  removeListenerAction: database.actions.removeListener,
};

export default connect(mapStateToProps, mapDispathToProps)(Exchange);
