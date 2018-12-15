import MODULE_NAME from './firebaseConstants';
import { updateTypes, pathTypes } from '../../../firebase';
import { buildActions } from '../../../utils';

const buildActionsWithFbTypes = (moduleName, prefix, types) =>
Object.assign(
  {},
  buildActions(moduleName, prefix),
  Object.keys(types || {}).reduce((acc, type) => {
    acc[type] = buildActions(moduleName, prefix, type);
    return acc;
  }, {}),
);

export const UPDATE = buildActionsWithFbTypes(MODULE_NAME, 'UPDATE', updateTypes);
export const ADD_LISTENER = buildActionsWithFbTypes(MODULE_NAME, 'ADD_LISTENER', pathTypes);
export const GET_DATA = buildActionsWithFbTypes(MODULE_NAME, 'GET_DATA', pathTypes);
export const ADD_CHILD = buildActionsWithFbTypes(MODULE_NAME, 'ADD_CHILD', pathTypes);
export const REMOVE_CHILD = buildActionsWithFbTypes(MODULE_NAME, 'REMOVE_CHILD', pathTypes);
export const CHANGE_CHILD = buildActionsWithFbTypes(MODULE_NAME, 'CHANGE_CHILD', pathTypes);

export const update = (updateType, data, actions) => ({
  type: UPDATE.STARTED,
  meta: {
    actions,
  },
  payload: {
    updateType,
    data,
  },
});

export const fulfillUpdate = (updateType, actions) => ({
  type: UPDATE.FULFILLED,
  meta: {
    actions,
  },
  payload: {
    updateType,
  },
});

export const failUpdate = (updateType, error, actions) => ({
  type: UPDATE.FAILED,
  meta: {
    actions,
  },
  payload: {
    updateType,
    error,
  },
});


export const updateType = type => ({
  type: UPDATE[type].STARTED,
  payload: {},
});

export const fulfillUpdateType = type => ({
  type: UPDATE[type].FULFILLED,
  payload: {},
});

export const failUpdateType = type => ({
  type: UPDATE[type].FAILED,
  payload: {},
});


export const updateActions = actions => ({
  type: actions.STARTED,
  payload: {},
});

export const fulfillUpdateActions = actions => ({
  type: actions.FULFILLED,
  payload: {},
});

export const failUpdateActions = actions => ({
  type: actions.FAILED,
  payload: {},
});


export const addListener = pathType => ({
  type: ADD_LISTENER.STARTED,
  payload: {
    pathType,
  },
});

export const fulfillAddListener = (pathType, data) => ({
  type: ADD_LISTENER.FULFILLED,
  payload: {
    pathType,
    data,
  },
});

export const failAddListener = (pathType, error) => ({
  type: ADD_LISTENER.FAILED,
  payload: {
    pathType,
    error,
  },
});


export const addListenerPathType = pathType => ({
  type: ADD_LISTENER[pathType].STARTED,
  payload: {},
});

export const fulfillAddListenerPathType = pathType => ({
  type: ADD_LISTENER[pathType].FULFILLED,
  payload: {},
});

export const faildAddListenerPathType = pathType => ({
  type: ADD_LISTENER[pathType].FAILED,
  payload: {},
});


export const getData = (pathType, { startAt, endAt }) => ({
  type: GET_DATA.STARTED,
  meta: {
    startAt,
    endAt,
  },
  payload: {
    pathType,
  },
});

export const fulfillGetData = (pathType, data) => ({
  type: GET_DATA.FULFILLED,
  payload: {
    pathType,
    data,
  },
});

export const failGetData = (pathType, error) => ({
  type: GET_DATA.FAILED,
  payload: {
    pathType,
    error,
  },
});


export const getDataPathType = pathType => ({
  type: GET_DATA[pathType].STARTED,
  payload: {},
});

export const fulfillGetDataPathType = pathType => ({
  type: GET_DATA[pathType].FULFILLED,
  payload: {},
});

export const failGetDataPathType = pathType => ({
  type: GET_DATA[pathType].FAILED,
  payload: {},
});


export const fulfillAddChild = (pathType, key, value) => ({
  type: ADD_CHILD.FULFILLED,
  payload: {
    pathType,
    key,
    value,
  },
});

export const fulfillChangeChild = (pathType, key, value) => ({
  type: CHANGE_CHILD.FULFILLED,
  payload: {
    pathType,
    key,
    value,
  },
});

export const fulfillRemoveChild = (pathType, key) => ({
  type: REMOVE_CHILD.FULFILLED,
  payload: {
    pathType,
    key,
  },
});


export const fulfillAddChildPathType = pathType => ({
  type: ADD_CHILD[pathType].FULFILLED,
  payload: {},
});

export const fulfillChangeChildPathType = pathType => ({
  type: CHANGE_CHILD[pathType].FULFILLED,
  payload: {},
});

export const fulfillRemoveChildPathType = pathType => ({
  type: REMOVE_CHILD[pathType].FULFILLED,
  payload: {},
});
