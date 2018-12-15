import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../Avatar';

const minimalProps = {
  src: 'https://avatars3.githubusercontent.com/u/819041',
};

const commonProps = {
  ...minimalProps,
};

describe('<Avatar /> Tests', () => {
  it('should render without exploding', (done) => {
    const wrapper = shallow(<Avatar {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly', (done) => {
    const wrapper = shallow(<Avatar {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with all props', (done) => {
    const wrapper = shallow(<Avatar {...commonProps} />);
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
