import React from 'react';
import { shallow } from 'enzyme';
import { createReduxTestStore } from '../../utils/test';
import RouteContainer from '../RouteContainer';

const initialState = {
  router: {
    current: {
      pathname: '/',
    },
    previous: {
      pathname: '/',
    },
  },
};

const minimalProps = {
  location: {
    pathname: '/',
  },
};

describe('<RouteContainer /> Tests', () => {
  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore({
      configs: { initialState },
    });
    const wrapper = shallow(<RouteContainer store={testStore} {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly with minimal props', (done) => {
    const testStore = createReduxTestStore({
      configs: { initialState },
    });
    const wrapper = shallow(<RouteContainer store={testStore} {...minimalProps} />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly when is not authenticated and route is protected', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ...initialState,
          auth: {
            isAuthenticating: false,
          },
        },
      },
    });
    const wrapper = shallow(<RouteContainer store={testStore} {...minimalProps} isProtected />);
    expect(wrapper.dive()).toMatchSnapshot();
    done();
  });
});
