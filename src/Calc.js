import React, { Component } from 'react';
import logo from './logo.svg';
import './Calc.css';

import CalcDisplay from './CalcDisplay';
import CalcInput from './CalcInput';

class Calc extends Component {
  constructor(){
    super();

    this.state = {
      storedValue: 0,
      displayValue: 0,
      func: '+',
    };
  }

  onNumber = (number)=>{
    this.setState({ displayValue: this.state.displayValue *10 + number });
  }

  onFunc = (func)=>{
    this.setState({ func, storedValue: this.state.displayValue, displayValue: 0 });
  }

  onEq = ()=>{
    const { func, displayValue, storedValue } = this.state;
    this.setState({ storedValue:0, displayValue: eval(`${displayValue}${func}${storedValue}`), func:'+' });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="calc">
          <CalcDisplay value={this.state.displayValue} stored={this.state.storedValue} func={this.state.func}/>
          <CalcInput onNumber={this.onNumber} onFunc={this.onFunc} onEq={this.onEq} />
        </div>
      </div>
    );
  }
}

export default Calc;
