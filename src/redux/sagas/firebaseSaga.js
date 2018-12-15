import { all, take, call, put, fork, flush, cancel, takeEvery } from 'redux-saga/effects';
import { eventChannel, buffers } from 'redux-saga';
import { ref, updates, paths, eventTypes } from '../../firebase';
import { firebase } from '../modules';

function listenerChannel(pathType) {
  const path = paths[pathType]();
  const listener = eventChannel((emitter) => {
    const childRef = ref.child(path);
    childRef.on('child_added', (snap) => {
      emitter({
        eventType: eventTypes.CHILD_ADDED,
        key: snap.key,
        value: snap.val(),
      });
    });
    childRef.on('child_changed', (snap) => {
      emitter({
        eventType: eventTypes.CHILD_CHANGED,
        key: snap.key,
        value: snap.val(),
      });
    });
    childRef.on('child_removed', (snap) => {
      emitter({
        eventType: eventTypes.CHILD_REMOVED,
        key: snap.key,
        value: snap.val(),
      });
    });
    return () => {
      childRef.off();
    };
  }, buffers.expanding(1));
  return listener;
}

function* updatePath(action) {
  try {
    const data = updates[action.payload.updateType](action.payload.data);
    yield call([ref, ref.update], data);
    yield put(firebase.actions.fulfillUpdate(action.payload.updateType, action.meta.actions));
    yield put(firebase.actions.fulfillUpdateType(action.payload.updateType));
  } catch (err) {
    yield put(firebase.actions.failUpdate(action.payload.updateType, err, action.meta.actions));
    yield put(firebase.actions.failUpdateType(action.payload.updateType));
  }
}

function* getDataAndListenToChannel(pathType) {
  const channel = yield call(listenerChannel, pathType);
  try {
    const path = paths[pathType]();
    const childRef = ref.child(path);
    const snap = yield call([childRef, childRef.once], 'value');
    yield flush(channel);
    const val = snap.val();
    const value = val || {};
    yield put(firebase.actions.fulfillAddListener(pathType, value));
    yield put(firebase.actions.fulfillAddListenerPathType(pathType));
    while (true) {
      const data = yield take(channel);
      switch (data.eventType) {
        case eventTypes.CHILD_ADDED:
          yield put(firebase.actions.fulfillAddChild(pathType, data.key, data.value));
          yield put(firebase.actions.fulfillAddChildPathType(pathType));
        break;
        case eventTypes.CHILD_CHANGED:
          yield put(firebase.actions.fulfillChangeChild(pathType, data.key, data.value));
          yield put(firebase.actions.fulfillChangeChildPathType(pathType));
        break;
        case eventTypes.CHILD_REMOVED:
          yield put(firebase.actions.fulfillRemoveChild(pathType, data.key));
          yield put(firebase.actions.fulfillRemoveChildPathType(pathType));
        break;
      }
    }
  } catch (error) {
    yield put(firebase.actions.failAddListener(pathType, error));
    yield put(firebase.actions.faildAddListenerPathType(pathType));
  } finally {
    channel.close();
  }
}

function* getData(action) {
  const { pathType } = action.payload;
  try {
    const path = paths[pathType]();
    const childRef = ref.child(path);
    const snap = yield call([childRef, childRef.once], 'value');
    const val = snap.val();
    const value = val || {};
    yield put(firebase.actions.fulfillGetData(pathType, value));
    yield put(firebase.actions.fulfillGetDataPathType(pathType));
  } catch (error) {
    yield put(firebase.actions.failGetData(pathType, error));
    yield put(firebase.actions.failGetDataPathType(pathType));
  }
}

function* watchUpdateStarted() {
  while (true) {
    const action = yield take(firebase.actions.UPDATE.STARTED);
    yield put(firebase.actions.updateType(action.payload.updateType));
    yield fork(updatePath, action);
    if (action.meta.actions) {
      yield put(firebase.actions.updateActions(action.meta.actions));
    }
  }
}

function* watchUpdateFulfilled() {
  while (true) {
    const { meta } = yield take(firebase.actions.UPDATE.FULFILLED);
    if (meta.actions) {
      yield put(firebase.actions.fulfillUpdateActions(meta.actions));
    }
  }
}

function* watchUpdateFailed() {
  while (true) {
    const { payload, meta } = yield take(firebase.actions.UPDATE.FAILED);
    if (meta.actions) {
      yield put({
        type: meta.actions.FAILED,
        payload,
      });
    }
  }
}

function* watchListenerStarted() {
  const listeners = {};
  while (true) {
    const action = yield take(firebase.actions.ADD_LISTENER.STARTED);
    const { pathType } = action.payload;
    let task = listeners[pathType];
    if (task) {
      yield cancel(task);
    }
    task = yield fork(
      getDataAndListenToChannel,
      pathType,
    );
    listeners[pathType] = task;
    yield put(firebase.actions.addListenerPathType(pathType));
  }
}

function* watchGetDataStarted() {
  yield takeEvery(firebase.actions.GET_DATA.STARTED, getData);
}

function* firebaseSaga() {
  yield all([
    watchUpdateStarted(),
    watchUpdateFulfilled(),
    watchUpdateFailed(),
    watchListenerStarted(),
    watchGetDataStarted(),
  ]);
}

export default firebaseSaga;
