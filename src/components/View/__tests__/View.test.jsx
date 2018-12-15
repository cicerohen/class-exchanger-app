import React from 'react';
import { shallow } from 'enzyme';
import View from '../View';

const minimalProps = {
  title: 'View Title',
  header: <div className="header" />,
  sidebar: <div className="sidebar" />,
  footer: <div className="footer" />,
  sidebarIsOpen: false,
  closeSidebarFn: () => {},
};

describe('<View /> Tests', () => {
  it('should render without exploding', () => {
    const wrapper = shallow(<View {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render correctly with minimal props', (done) => {
    const wrapper = shallow(<View {...minimalProps}><div>content</div></View>);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with subtitle', (done) => {
    const wrapper = shallow(<View {...minimalProps} subtitle="View Subtitle" />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should render correctly with sidebar opened', (done) => {
    const wrapper = shallow(<View {...minimalProps} sidebarIsOpen />);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call closeSidebarFn when click on sidebar backdrop', (done) => {
    const closeSidebarFnMock = jest.fn();
    const wrapper = shallow(
      <View
        {...minimalProps}
        sidebarIsOpen
        closeSidebarFn={closeSidebarFnMock}
      />
    );
    const sidebarBackdrop = wrapper.find('.sidebarBackdrop');
    sidebarBackdrop.simulate('click');
    expect(closeSidebarFnMock.mock.calls.length).toBe(1);
    done();
  });
});

