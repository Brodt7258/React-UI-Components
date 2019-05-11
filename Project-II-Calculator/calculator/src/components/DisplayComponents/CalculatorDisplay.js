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
      <p>
        {val2}
        <span>{opSymbol}</span>
      </p>
      <h2 className="display-text">
        {val1}
      </h2>
    </div>
  );
};