import React from 'react';
import { shallow } from 'enzyme';
import { FaClose } from 'react-icons/lib/fa';
import Anchor from '../../Anchor';
import Sidebar from '../Sidebar';

const minimalProps = {
  sidebarTitle: 'Sidebar title',
  closeSidebarFn: jest.fn(),
};

describe('<Sidebar /> Tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it('should render without exploding', () => {
    const wrapper = shallow(
      <Sidebar {...minimalProps}>
        <div>Content</div>
      </Sidebar>
    );
    expect(wrapper).toHaveLength(1);
  });

  it('should render correctly with minimal props', (done) => {
    const wrapper = shallow(<Sidebar {...minimalProps}><div>content</div></Sidebar>);
    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('should call closeSidebarFn with click on close icon', (done) => {
    const wrapper = shallow(
      <Sidebar {...minimalProps}>
        <div>content</div>
      </Sidebar>
    );
    const anchor = wrapper
    .find(Anchor)
    .filterWhere(n => n.children().type() === FaClose)
    .first()
    .dive()
    .shallow();
    anchor.find('a').first().simulate('click');
    expect(minimalProps.closeSidebarFn.mock.calls.length).toBe(1);
    done();
  });
});