import { all, take, takeLatest, call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { auth as fbAuth, updateTypes, checkIfAuthUserExists } from '../../firebase';
import { auth, firebase } from '../modules';

function fbAuthStateChannel() {
  const channel = eventChannel((emit) => {
    const unsubscribe = fbAuth.onAuthStateChanged(
      authUser => emit({ authUser }),
      error => emit({ error }),
    );
    return unsubscribe;
  });
  return channel;
}

function* signInWithEmail(action) {
  try {
    const data = yield call(
        [fbAuth, fbAuth.signInWithEmailAndPassword],
        action.payload.email, action.payload.password,
    );
    yield put(auth.actions.signInWithEmailFulfilled(data));
  } catch (err) {
    yield put(auth.actions.signInFailed());
  }
}

function* signUpWithEmail(action) {
  try {
    const data = yield call(
        [fbAuth, fbAuth.createUserAndRetrieveDataWithEmailAndPassword],
        action.payload.email,
        action.payload.password,
    );
    yield put(auth.actions.signUpFulfilled(data));
  } catch (error) {
    yield put(auth.actions.signUpFailed());
  }
}

function* signOut() {
  try {
    yield call([fbAuth, fbAuth.signOut]);
    yield put(auth.actions.signOutFulfilled());
  } catch (err) {
    yield put(auth.actions.signOutFailed(err));
  }
}

function* watchSignInWithEmailRequested() {
  yield takeLatest(auth.actions.SIGN_IN_WITH_EMAIL.REQUESTED, signInWithEmail);
}

function* watchSignUpWithEmailRequested() {
  yield takeLatest(auth.actions.SIGN_UP_WITH_EMAIL.REQUESTED, signUpWithEmail);
}

function* watchSignOutRequested() {
  yield takeLatest(auth.actions.SIGN_OUT.REQUESTED, signOut);
}

function* updateOrCreateAuthUser(authUser) {
  const authUserExists = yield call(checkIfAuthUserExists);
  const data = {
    userId: authUser.uid,
    payload: {
      displayName: authUser.displayName,
      email: authUser.email,
    },
  };
  if (!authUserExists) {
    yield put(firebase.actions.update(updateTypes.AUTHUSER_CREATE, data));
  } else {
    yield put(firebase.actions.update(updateTypes.AUTHUSER_UPDATE, data));
  }
}

function* watchFbAuthChange() {
  const channel = yield call(fbAuthStateChannel);
  while (true) {
    const { authUser, error } = yield take(channel);
    yield put(auth.actions.authStateChange(authUser));
    try {
      if (error) {
        throw error;
      }
      if (authUser) {
        yield call(updateOrCreateAuthUser, authUser);
      }
    } catch (err) {
      console.error(err);
    }
  }
}

function* authSaga() {
  yield all([
    watchFbAuthChange(),
    watchSignInWithEmailRequested(),
    watchSignUpWithEmailRequested(),
    watchSignOutRequested(),
  ]);
}

export default authSaga;
