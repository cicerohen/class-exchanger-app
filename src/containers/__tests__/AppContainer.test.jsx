import React from 'react';
import { shallow } from 'enzyme';
import { Router, Switch } from 'react-router-dom';
import { createReduxTestStore } from '../../utils/test';
import AppContainer from '../AppContainer';

describe('<AppContainer /> Tests', () => {
  it('should render without exploding', (done) => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<AppContainer store={testStore} />);
    const router = wrapper.find(Router);
    expect(router).toHaveLength(1);
    expect(router.find(Switch)).toHaveLength(1);
    done();
  });
});

