import * as selectors from '../authSelectors';
import { asImmutable } from '../../../../utils';

const initialState = {
  auth: {
    user: {
      user: {
        uid: 1,
        email: 'user@email.com',
      }
    },
    isAuthenticated: false,
    isAuthenticating: true,
  }
};

describe('authSelectors tests', () => {
  it('should get user correctly', (done) => {
    expect(selectors.getUser(asImmutable(initialState)).toJS()).toMatchSnapshot();
    done();
  });
  it('should check if is authenticating correctly', (done) => {
    expect(selectors.isAuthenticating(asImmutable(initialState))).toMatchSnapshot();
    done();
  });
  it('should check if is authenticated correctly', (done) => {
    expect(selectors.isAuthenticated(asImmutable(initialState))).toMatchSnapshot();
    done();
  });
});