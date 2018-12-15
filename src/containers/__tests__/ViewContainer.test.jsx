import React from 'react';
import { shallow } from 'enzyme';
import ViewContainer from '../ViewContainer';
import { createReduxTestStore } from '../../utils/test';
import { ui } from '../../redux';

const minimalProps = {
  title: 'View Title',
};

describe('<ViewContainer /> Tests', () => {
  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<ViewContainer store={testStore} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should render correctly with minimal props', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(
      <ViewContainer
        store={testStore}
        {...minimalProps}
      >
        <div>content</div>
      </ViewContainer>,
    );
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly with header prop', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<ViewContainer
      store={testStore}
      header={
        <div className="header" />
        }
      {...minimalProps}
    />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly with sidebar prop', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<ViewContainer
      store={testStore}
      sidebar={
        <div className="sidebar" />
        }
      {...minimalProps}
    />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly with footer prop', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<ViewContainer
      store={testStore}
      footer={
        <div className="footer" />
        }
      {...minimalProps}
    />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should render correctly when sidebar is opened', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ui: {
            sidebarIsOpen: true,
          },
        },
      },
    });
    const wrapper = shallow(<ViewContainer
      store={testStore}
      sidebarIsOpen
      {...minimalProps}
    />);
    expect(wrapper.dive().shallow()).toMatchSnapshot();
    done();
  });

  it('should close sidebar when click on sidebar backdrop', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ui: {
            sidebarIsOpen: true,
          },
        },
      },
    });
    const wrapper = shallow(<ViewContainer store={testStore} {...minimalProps} />);
    testStore.when(ui.actions.CLOSE_SIDEBAR, () => {
      const sidebarIsOpen = testStore.select(ui.selectors.sidebarIsOpen);
      expect(sidebarIsOpen).toBe(false);
      setImmediate(() => {
        wrapper.update();
        expect(wrapper.dive().shallow()).toMatchSnapshot();
        done();
      });
    });
    const sidebarBackdrop = wrapper.dive().shallow().find('.sidebarBackdrop');
    sidebarBackdrop.simulate('click');
  });
});
