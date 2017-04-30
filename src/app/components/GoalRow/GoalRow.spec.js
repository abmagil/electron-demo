import { shallow } from 'enzyme';
import GoalRow from '../GoalRow';
import React from 'react';

function setup() {
  const props = {
    goal: {
      id: 1,
      goalTotal: 12,
      deadlineYear: new Date().getFullYear(),
      spendingPerMonth: 1
    },
    spendingSummary: 'onTrack',
    onUpClick: jest.fn(),
    onDownClick: jest.fn(),
  }
  const wrapper = shallow(<GoalRow {...props} />);

  return {
    wrapper,
    props
  }
}

describe('components', () => {
  describe('<GoalRow />', () => {
    it(`should fire the passed onUpClick with the goal ID when the "Up" button is pressed`, () => {
      const { wrapper, props } = setup();
      wrapper.find('.up').simulate('click')

      expect(props.onUpClick).toHaveBeenCalledWith(1);
    });
    it(`should fire the passed onDownClick with the goal ID when the "Down" button is pressed`, () => {
      const { wrapper, props } = setup();
      wrapper.find('.down').simulate('click')

      expect(props.onDownClick).toHaveBeenCalledWith(1);
    });
  })
})
