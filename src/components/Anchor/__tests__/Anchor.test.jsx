import React from 'react';
import { shallow } from 'enzyme';
import Anchor from '../Anchor';

const commonProps = {
  href: 'http://www.google.com',
  title: 'Anchor title',
  onClick: jest.fn(),
};

describe('<Anchor /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', () => {
    const wrapper = shallow(<Anchor><div>Link</div></Anchor>);
    expect(wrapper).toHaveLength(1);
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Anchor><div>Link</div></Anchor>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with all props', (done) => {
    const wrapper = shallow(<Anchor {...commonProps}><div>Link</div></Anchor>);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call onClick handler when click on anchor', (done) => {
    const wrapper = shallow(<Anchor {...commonProps}><div>Link</div></Anchor>);
    const anchor = wrapper.find('a').first();
    anchor.simulate('click');
    expect(commonProps.onClick.mock.calls.length).toBe(1);
    done();
  });
});
