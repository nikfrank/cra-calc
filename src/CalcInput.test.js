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

it('calls the right functions', ()=>{
  // init spy functions
  const onNumber = jest.fn();
  const onFunc = jest.fn();
  const onClear = jest.fn();
  const onEq = jest.fn();

  // shallow render
  const wrapper = shallow(
    <CalcInput onNumber={onNumber}
               onFunc={onFunc}
               onClear={onClear}
               onEq={onEq}/>
  );

  // simulate clicks and make expectations
  
  wrapper.find('.calc-input-number')
         .first()
         .simulate('click');

  expect(onNumber).toBeCalledWith(1);

  
  wrapper.find('.calc-input-func')
         .at(4)
         .simulate('click');

  expect(onFunc).toBeCalledWith('%');


  wrapper.find('.calc-input-eq')
         .simulate('click');

  expect(onEq.mock.calls.length).toEqual(1);


  const clearBtn = wrapper.find('.calc-input-clear');

  clearBtn.simulate('click');
  clearBtn.simulate('click');

  expect(onClear.mock.calls.length).toEqual(2);
});
