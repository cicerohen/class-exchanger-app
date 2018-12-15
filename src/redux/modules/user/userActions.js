import { buildActions } from '../../../utils';
import MODULE_NAME from './userConstants';

export const CREATE_USER = buildActions(MODULE_NAME, 'CREATE_USER');
export const UPDATE_USER = buildActions(MODULE_NAME, 'UPDATE_USER');

export const createUser = (userId, payload) => ({
  type: CREATE_USER.STARTED,
  meta: {
    userId,
  },
  payload: {
    ...payload,
  },
});

export const fulfillCreateUser = () => ({
  type: CREATE_USER.FULFILLED,
  payload: {},
});

export const failCreateUser = error => ({
  type: CREATE_USER.FAILED,
  payload: {
    error,
  },
});

export const updateUser = (userId, payload) => ({
  type: UPDATE_USER.STARTED,
  meta: {
    userId,
  },
  payload: {
    ...payload,
  },
});

export const fulfillUpdateUser = () => ({
  type: UPDATE_USER.FULFILLED,
  payload: {},
});

export const failUpdateUser = error => ({
  type: UPDATE_USER.FAILED,
  payload: {
    error,
  },
});
