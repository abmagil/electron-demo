import React from 'react';
import { mount, shallow } from 'enzyme';
import AvailableCash from '../AvailableCash';

function setup() {
  const props = {
    spendingSummary: 'onTrack',
    availableCash: 100,
    updateHandler: jest.fn(),    
  };
  const wrapper = shallow(<AvailableCash {...props} />);

  return {
    wrapper
  }
}

describe('components', () => {
  describe('<AvailableCash />', () => {
    it('has an input field', () => {
      const { wrapper } = setup();

      expect(wrapper.find('input').length).toBe(1);
    })

    it('exposes the availableCash property as the value of its input', () => {
      const { wrapper } = setup();
      wrapper.setProps({ availableCash: 300 });

      expect(wrapper.find('input').props().value).toBe(300)
    })
  })
})
