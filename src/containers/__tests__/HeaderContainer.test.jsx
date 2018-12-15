import React from 'react';
import { shallow } from 'enzyme';
import { FaBars } from 'react-icons/lib/fa';
import MenuItem from '../../components/MenuItem';
import HeaderContainer from '../HeaderContainer';
import { createReduxTestStore } from '../../utils/test';
import { ui, auth, router } from '../../redux';

const eventMockObject = {
  preventDefault: jest.fn(),
};

describe('<HeaderContainer /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly when is not authenticated', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          auth: {
            isAuthenticated: false,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly when is authenticated', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          auth: {
            isAuthenticated: true,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should open sidebar when click on hamburguer menu item', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ui: {
            sidebarIsOpen: false,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(ui.actions.OPEN_SIDEBAR, () => {
      const sidebarIsOpen = testStore.select(ui.selectors.sidebarIsOpen);
      expect(sidebarIsOpen).toBe(true);
      done();
    });

    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().type() === FaBars);

    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should sign out when click on sign out menu', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          auth: {
            isAuthenticated: true,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(auth.actions.SIGN_OUT.REQUESTED, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Sign Out'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Me page when click on menu item', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          auth: {
            isAuthenticated: true,
          },
        },
      },
    });
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Me'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Home page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Home'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Sign In page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Sign In'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });

  it('should navigate to Sign Up page when click on menu item', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<HeaderContainer store={testStore} />);
    testStore.when(router.actions.PUSH, () => {
      done();
    });
    const menuItem = wrapper.dive().shallow()
    .find(MenuItem)
    .filterWhere(item => item.children().contains('Sign Up'));
    const menuItemAnchor = menuItem.dive().shallow().find('a').first();
    menuItemAnchor.simulate('click', eventMockObject);
  });
});
