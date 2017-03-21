import React from 'react';
import ReactDOM from 'react-dom';
import CalcDisplay from './CalcDisplay';

import { shallow } from 'enzyme';

it('should render the values and func', () => {
  const wrapper = shallow(
    <CalcDisplay value={3} stored={5} func={'%'}/>
  );
  expect(wrapper).toMatchSnapshot();
});
