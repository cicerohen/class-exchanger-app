import { all, select, takeLatest } from 'redux-saga/effects';
import { pathTypes } from '../../firebase';
import { firebase } from '../modules';

function* getExchangesUser() {
  const exchanges = yield select(firebase.selectors.getAllExchanges);
  console.log(exchanges.toJS());
}

function* watchAddListenerExchangesFulfilled() {
  yield takeLatest(firebase.actions.ADD_LISTENER[pathTypes.EXCHANGES].FULFILLED, getExchangesUser);
}

function* watchAddChildExchangesFulfilled() {
  yield takeLatest(firebase.actions.ADD_CHILD[pathTypes.EXCHANGES].FULFILLED, getExchangesUser);
}

function* exchangeSaga() {
  yield all([
    watchAddListenerExchangesFulfilled(),
    watchAddChildExchangesFulfilled(),
  ]);
}

export default exchangeSaga;
