import { all, takeEvery } from 'redux-saga/effects';
import { getHistory } from '../../utils';
import { router } from '../modules';

const history = getHistory();

function push(action) {
  history.push(action.payload.href);
}

function replace(action) {
  history.replace(action.payload.href);
}

function go(action) {
  history.go(action.payload.index);
}

function back() {
  history.goBack();
}

function forward() {
  history.goForward();
}

function* watchPush() {
  yield takeEvery(router.actions.PUSH, push);
}

function* watchReplace() {
  yield takeEvery(router.actions.REPLACE, replace);
}

function* watchGo() {
  yield takeEvery(router.actions.GO, go);
}

function* watchBack() {
  yield takeEvery(router.actions.BACK, back);
}

function* wawtchForward() {
  yield takeEvery(router.actions.FORWARD, forward);
}

function* routerSaga() {
  yield all([
    watchPush(),
    watchReplace(),
    watchGo(),
    watchBack(),
    wawtchForward(),
  ]);
}

export default routerSaga;
