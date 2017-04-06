import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './Calc';

import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calc />, div);
});

it('computes a calculation', ()=>{
  const p = mount(<Calc/>);

  let stateAsIs = () => p.component.getInstance().state;
  
  // hashtaggggg! this really doesn't matter, but we can do this.
  p.setProps({ what: 'ever' });

  p.find('.calc-input-number').at(4).simulate('click');
  // hit the 5 button
  
  let state = stateAsIs();
  // copy the state as such RAK CACH
  
  expect(state.displayValue).toEqual(5);

  
  p.find('.calc-input-func').at(2).simulate('click');
  
  state = stateAsIs();

  expect(state.func).toEqual('*');
  expect(state.storedValue).toEqual(5);


  
  p.find('.calc-input-number').at(8).simulate('click');
  p.find('.calc-input-number').at(6).simulate('click');
  
  state = stateAsIs();

  expect(state.displayValue).toEqual(97);



  
  p.find('.calc-input-eq').simulate('click');

  state = stateAsIs();

  
  expect(state.storedValue).toEqual(0);
  expect(state.displayValue).toEqual(485);

  
});
