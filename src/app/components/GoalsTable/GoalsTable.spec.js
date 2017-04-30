import { mount, shallow } from 'enzyme';
import GoalsTable from '../GoalsTable';
import React from 'react';

function setup() {
  const props = {
    orderedGoals: [],
    cumulativeGoalSpending: []
  } 
  const wrapper = shallow(<GoalsTable {...props} />);

  return {
    wrapper
  }
}

describe('components', () => {
  describe('<GoalsTable />', () => {
    it('should render a table', () => {
      const { wrapper } = setup();

      expect(wrapper.find('table').length).toBe(1);
    });
    
    it('should display the total monthly spending on goals', () => {
      const { wrapper } = setup();
      expect(wrapper.find('.goalsTable__total').text()).toEqual('0');

      wrapper.setProps({
        orderedGoals: [
          {id: 1, goalTotal: 100, deadlineYear: 2059, spendingPerMonth: 40},
          {id: 1, goalTotal: 100, deadlineYear: 2059, spendingPerMonth: 40},
          {id: 1, goalTotal: 100, deadlineYear: 2059, spendingPerMonth: 40},
        ]
      })
      expect(wrapper.find('.goalsTable__total').text()).toEqual('120');
    })
  });
})
