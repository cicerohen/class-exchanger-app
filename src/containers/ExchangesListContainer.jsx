// import React, { Component } from 'react';
// import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { pathTypes, paths } from '../firebase';
// import { database } from '../redux';
// import ExchangeList from '../components/ExchangeList';

// class ExchangesListContainer extends Component {
//   componentDidMount = () => {
//     this.addListeners();
//   }

//   addListeners = () => {
//     const { requestListenerAction } = this.props;
//     requestListenerAction(pathTypes.EXCHANGES, paths.EXCHANGES());
//   }

//   render() {
//     const { exchanges } = this.props;
//     return (
//       <ExchangeList exchanges={exchanges} />
//     );
//   }
// }

// ExchangesListContainer.propTypes = {
//   exchanges: PropTypes.objectOf(PropTypes.any).isRequired,
//   requestListenerAction: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   exchanges: database.selectors.getAllExchanges,
// });

// const mapDispatchToProps = {
//   requestListenerAction: database.actions.requestListener,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ExchangesListContainer);
