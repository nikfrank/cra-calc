import React, { Component } from 'react';

class CalcInput extends Component {
  render() {
    return (
      <div className="calc-input">
        {
          [1,2,3,4,5,6,7,8,9,0].map( i => (
            <button key={i}
                    onClick={()=>this.props.onNumber(i)}>
              {i}
            </button>
          ) )
        }
        {
          ['+', '-', '*', '/', '%'].map( f => (
            <button key={f}
                    onClick={()=>this.props.onFunc(f)}>
              {f}
            </button>
          ) )
        }
        <button onClick={this.props.onEq}>=</button>
        <button onClick={this.props.onClear}>C</button>
      </div>
    );
  }
}

export default CalcInput;
