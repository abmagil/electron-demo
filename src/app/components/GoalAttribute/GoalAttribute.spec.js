import React from 'react';
import { mount, shallow } from 'enzyme';
import GoalAttribute from '../GoalAttribute';
import NumericInput from '../NumericInput';

function setup() {
  const props = {
    attrName: 'deadline',
    value: 2000,
    isLocked: true,
    goalID: 1,
    lockedHandler: jest.fn(),
    updateHandler: jest.fn(),
  };
  const wrapper = shallow(<GoalAttribute {...props} />);

  return { wrapper, props }
}

describe('components', () => {
  describe('<GoalAttribute />', () => {
    it('renders a <p> when attribute is locked', () => {
      const { wrapper } = setup();

      expect(wrapper.find('p').length).toBe(1);
      expect(wrapper.find('p').text()).toBe('2000');
    })

    it('renders an input when attribute is not locked', () => {
      const { wrapper } = setup();
      wrapper.setProps({
        isLocked: false
      })

      expect(wrapper.find(NumericInput).length).toBe(1);
      expect(wrapper.find(NumericInput).prop('value')).toBe(2000);
    })
  })
  it('fires the updateHandler when the input value changes', () => {
    const { wrapper, props: { updateHandler }} = setup();
    wrapper.setProps({ isLocked: false })
    wrapper.find(NumericInput).simulate('change')

    expect(updateHandler).toHaveBeenCalled();
  });
  it('fires the lockedHandler when the lock icon is click', () => {
    const { wrapper, props: { lockedHandler }} = setup();
    wrapper.setProps({ isLocked: false });
    wrapper.find('img').simulate('click');

    expect(lockedHandler).toHaveBeenCalled();
  });
})
