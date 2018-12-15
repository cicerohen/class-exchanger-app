import React from 'react';
import { shallow } from 'enzyme';
import { FaClose } from 'react-icons/lib/fa';
import { createReduxTestStore } from '../../utils/test';
import Anchor from '../../components/Anchor';
import SidebarContainer from '../SidebarContainer';
import { ui } from '../../redux';

describe('<SidebarContainer /> Tests', () => {
  it('should render without exploding', (done) => {
    const testStore = createReduxTestStore();
    const wrapper = shallow(<SidebarContainer store={testStore} />);
    expect(wrapper).toHaveLength(1);
    done();
  });

  it('should close sidebar with click on close icon', (done) => {
    const testStore = createReduxTestStore({
      configs: {
        initialState: {
          ui: {
            sidebarIsOpen: true,
          },
        },
      },
    });
    const wrapper = shallow(<SidebarContainer store={testStore} />);
    testStore.when(ui.actions.CLOSE_SIDEBAR, () => {
      const sidebarIsOpen = testStore.select(ui.selectors.sidebarIsOpen);
      expect(sidebarIsOpen).toBe(false);
      done();
    });
    const anchor = wrapper
    .dive()
    .shallow()
    .find(Anchor)
    .filterWhere(n => n.children().type() === FaClose)
    .first();
    anchor.dive().find('a').first().simulate('click');
  });
});