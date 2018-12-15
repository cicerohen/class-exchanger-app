import { buildActions } from '../../../utils';
import MODULE_NAME from './authConstants';

export const AUTH_STATE_CHANGED = `${MODULE_NAME}/AUTH_STATE_CHANGED`;

export const SIGN_IN_WITH_EMAIL = buildActions(MODULE_NAME, 'SIGN_IN_WITH_EMAIL');
export const SIGN_UP_WITH_EMAIL = buildActions(MODULE_NAME, 'SIGN_UP_WITH_EMAIL');
export const SIGN_OUT = buildActions(MODULE_NAME, 'SIGN_OUT');

export const USER_SAVED = `${MODULE_NAME}/USER_SAVED`;
export const USER_REMOVED = `${MODULE_NAME}/USER_REMOVED`;

export const authStateChange = user => ({
  type: AUTH_STATE_CHANGED,
  payload: {
    user,
  },
});

/* signIn */
export const signInWithEmail = (email, password) => ({
    type: SIGN_IN_WITH_EMAIL.REQUESTED,
    payload: {
        email,
        password,
    },
});

export const signInWithEmailFulfilled = data => ({
    type: SIGN_IN_WITH_EMAIL.SUCCEEDED,
    payload: {
        data,
    },
});

export const signInWithEmailFailed = error => ({
    type: SIGN_IN_WITH_EMAIL.FAILED,
    payload: {
        error,
    },
});

// signUp
export const signUpWithEmail = (email, password) => ({
    type: SIGN_UP_WITH_EMAIL.REQUESTED,
    payload: {
        email,
        password,
    },
});

export const signUpWithEmailFulfilled = data => ({
    type: SIGN_UP_WITH_EMAIL.SUCCEEDED,
    payload: {
        data,
    },
});

export const signUpWithEmailFailed = error => ({
    type: SIGN_UP_WITH_EMAIL.FAILED,
    payload: {
        error,
    },
});

// signOut
export const signOut = () => ({
    type: SIGN_OUT.REQUESTED,
});

export const signOutFulfilled = () => ({
    type: SIGN_OUT.SUCCEEDED,
});

export const signOutFailed = () => ({
    type: SIGN_OUT.FAILED,
});

export const saveUser = ({
    uid, email, displayName, emailVerified,
}) => ({
    type: USER_SAVED,
    payload: {
        uid,
        email,
        displayName,
        emailVerified,
    },
});

export const removeUser = () => ({
    type: USER_REMOVED,
});
