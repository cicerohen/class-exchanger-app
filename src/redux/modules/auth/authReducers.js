import { asImmutable } from '../../../utils';
import * as actions from './authActions';

const initialState = asImmutable({
  user: {},
  isAuthenticated: false,
  isAuthenticating: true,
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_STATE_CHANGED: {
      return state.merge({
        isAuthenticated: !!action.payload.user,
        isAuthenticating: false,
      });
    }
    case actions.USER_SAVED: {
      return state.mergeIn(['user'], asImmutable(action.payload));
    }
    case actions.USER_REMOVED: {
      return state.set('user', asImmutable({}));
    }
    default:
      return state;
  }
};
