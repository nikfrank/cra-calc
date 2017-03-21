import React, { Component } from 'react';

class CalcInput extends Component {
  render() {
    return (
      <div className="calc-input">
        {
          [1,2,3,4,5,6,7,8,9,0].map( i => (
            <button key={'number'+i}
                    className="calc-input-number"
                    onClick={()=>this.props.onNumber(i)}>
              {i}
            </button>
          ) )
        }
        {
          ['+', '-', '*', '/', '%'].map( f => (
            <button key={'func'+f}
                    className="calc-input-func"
                    onClick={()=>this.props.onFunc(f)}>
              {f}
            </button>
          ) )
        }
        <button onClick={this.props.onEq}
                className="calc-input-eq">
          =
        </button>
        <button onClick={this.props.onClear}
                className="calc-input-clear">
          C
        </button>
      </div>
    );
  }
}

export default CalcInput;
