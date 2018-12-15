import { all, takeLatest, call, put } from 'redux-saga/effects';
import { updates, updateTypes, ref } from '../../firebase';
import { user } from '../modules';

function* createUser(action) {
  try {
    const data = updates[updateTypes.AUTHUSER_CREATE]({
      userId: action.meta.userId,
      payload: action.payload,
    });
    yield call([ref, ref.update], data);
    yield put(user.actions.fulfillCreateUser());
  } catch (err) {
    yield put(user.actions.failCreateUser(err));
  }
}

function* updateUser(action) {
  try {
    const { meta, payload } = action;
    const data = {};
    if (payload.username) {
      data[updates[updateTypes.USER_USERNAME_UPDATE](meta.userId)] = payload.username;
    }
    if (payload.displayName) {
      data[updates[updateTypes.USER_DISPLAYNAME_UDPATE](meta.userId)] = payload.displayName;
    }
    yield call([ref, ref.update], data);
    yield put(user.actions.fulfillUpdateUser());
  } catch (err) {
    yield put(user.actions.failUpdateUser(err));
  }
}

function* watchCreateUserStarted() {
  yield takeLatest(user.actions.CREATE_USER.STARTED, createUser);
}

function* watchUpdateUserStarted() {
  yield takeLatest(user.actions.UPDATE_USER.STARTED, updateUser);
}

function* userSaga() {
  yield all([
    watchCreateUserStarted(),
    watchUpdateUserStarted(),
  ]);
}

export default userSaga;
