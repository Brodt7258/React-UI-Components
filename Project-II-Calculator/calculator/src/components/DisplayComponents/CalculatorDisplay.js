import React from 'react';
import './Display.css';

import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../../utils/types';

const getSymbol = op => {
  switch (op) {
    case ADD:
      return '+';
    case SUBTRACT:
      return '-';
    case MULTIPLY:
      return '×';
    case DIVIDE:
      return '÷';
    default:
  };
};

export default ({ val1, op, val2 }) => {

  const opSymbol = getSymbol(op);
  return (
    <div className="calc-display">
      <div className="top-display">
        <p>
          {val2}
        </p>
        <p>
          {opSymbol}
        </p>
      </div>
      <div className="main-display">
        <h2 className="display-text">
          {val1 || 0}
        </h2>
      </div>
    </div>
  );
};