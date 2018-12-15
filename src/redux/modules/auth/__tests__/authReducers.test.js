import * as actions from '../authActions';
import { reducer } from '../authReducers';
import { asImmutable } from '../../../../utils';

const initialState = {
  user: {
    uid: 1,
    email: 'cicero@viana.com',
    displayName: 'Cicero Viana',
    emailVerified: false,
  },
  isAuthenticated: false,
  isAuthenticating: true,
};

describe('authReducers tests', () => {
  it('should store correctly when user is saved', (done) => {
    const nextState = reducer(asImmutable(initialState), actions.saveUser({
      uid: 2,
      email: 'user@email.com',
      displayName: 'User',
      emailVerified: true,
    }));
    expect(nextState.toJS()).toMatchSnapshot();
    done();
  });

  it('should store correctly when user is removed', (done) => {
    const nextState = reducer(asImmutable(initialState), actions.removeUser());
    expect(nextState.toJS()).toMatchSnapshot();
    done();
  });
});