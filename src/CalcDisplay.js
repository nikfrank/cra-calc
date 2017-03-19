import React, { Component } from 'react';

class CalcDisplay extends Component {
  render() {
    return (
      <div className="calc-display">
        <p>{this.props.stored}</p>
        <p>{this.props.value}</p>
      </div>
    );
  }
}

export default CalcDisplay;
