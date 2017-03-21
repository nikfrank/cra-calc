import React from 'react';
import ReactDOM from 'react-dom';
import CalcInput from './CalcInput';

import { shallow } from 'enzyme';

it('should render the input buttons', () => {
  const wrapper = shallow(
    <CalcInput/>
  );
  expect(wrapper).toMatchSnapshot();
});
