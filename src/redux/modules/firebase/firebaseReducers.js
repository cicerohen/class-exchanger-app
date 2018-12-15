import { asImmutable } from '../../../utils';
import { toArrayPath } from '../../../firebase';
import * as actions from './firebaseActions';

const initialState = asImmutable({
    listeners: {},
    paths: {},
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_LISTENER.STARTED: {
      return state.mergeIn(
        ['listeners', `${action.payload.pathType}`], {
          ...action.payload,
          isSync: true,
        },
      );
    }
    case actions.ADD_LISTENER.FULFILLED: {
      const newState = state.mergeIn(
        ['listeners', `${action.payload.pathType}`], {
          isSync: false,
        });
      return newState.setIn(['paths', ...toArrayPath(action.payload.pathType)], asImmutable(action.payload.data));
    }
    case actions.GET_DATA.STARTED: {
      return state.mergeIn([
        'listeners', `${action.payload.pathType}`, {
          isSync: true,
        },
      ]);
    }
    case actions.GET_DATA.FULFILLED: {
      const newState = state.mergeIn([
        'listeners', `${action.payload.pathType}`, {
          isSync: false,
        },
      ]);
      return newState.mergeIn(['paths', ...toArrayPath(action.payload.pathType)], action.payload.data);
    }
    case actions.CHANGE_CHILD.FULFILLED:
    case actions.ADD_CHILD.FULFILLED: {
      return state.mergeIn(['paths', ...toArrayPath(action.payload.pathType), action.payload.key], action.payload.value);
    }
    case actions.REMOVE_CHILD.FULFILLED: {
      return state.deleteIn(['paths', ...toArrayPath(action.payload.pathType), action.payload.key]);
    }
    default:
      return state;
  }
};
