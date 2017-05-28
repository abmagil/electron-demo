import React from 'react';
import { mount, shallow } from 'enzyme';
import OverTimeDisplay from './';

function setup() {
  const props = {completionOrderedGoals: []};
  const wrapper = shallow(<OverTimeDisplay { ...props }/>);
  return { wrapper, props };
}

describe('components', () => {
  describe('<OverTimeDisplay />', () => {
    it('should render', () => {
      const { wrapper } = setup();
      expect(wrapper).toBeTruthy();
    });
  });
});
