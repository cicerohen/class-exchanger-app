import React from 'react';
import { shallow } from 'enzyme';
import { FaBars } from 'react-icons/lib/fa';
import Header from '../Header';
import MenuItem from '../../MenuItem';

const eventMockObject = {
  preventDefault: jest.fn(),
};

const minimalProps = {
  isAuthenticated: false,
  pushFn: jest.fn(),
  openSidebarFn: jest.fn(),
  signOutFn: jest.fn(),
};

describe('<Header /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', () => {
    const wrapper = shallow(<Header {...minimalProps} />);
    expect(wrapper).toHaveLength(1);
  });

  it('should render correctly with minimal props', () => {
    const wrapper = shallow(<Header {...minimalProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctlys when is authenticated', () => {
    const props = {
      ...minimalProps,
      isAuthenticated: true,
    };
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call pushFn when click on Me menu item', (done) => {
    const props = {
      ...minimalProps,
      isAuthenticated: true,
    };
    const wrapper = shallow(<Header {...props} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Me'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call pushFn when click on Home menu item', (done) => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Home'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call pushFn when click on Sign In menu item', (done) => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Sign In'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call pushFn when click on Sign Up menu item', (done) => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Sign Up'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.pushFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call signOutFn when click on Sign Out menu item', (done) => {
    const props = {
      ...minimalProps,
      isAuthenticated: true,
    };
    const wrapper = shallow(<Header {...props} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().contains('Sign Out'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.signOutFn.mock.calls.length).toBe(1);
    done();
  });

  it('should call openSidebarFn when click on hamburguer menu item', (done) => {
    const wrapper = shallow(<Header {...minimalProps} />);
    const menuItem = wrapper.find(MenuItem).filterWhere(item => item.children().type() === FaBars);
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
    expect(minimalProps.openSidebarFn.mock.calls.length).toBe(1);
    done();
  });
});
