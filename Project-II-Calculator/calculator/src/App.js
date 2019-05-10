import React, { useReducer } from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumBtn from './components/ButtonComponents/NumberButton';
import Keypad from './components/ButtonComponents/Keypad';
import Operators from './components/ButtonComponents/Operators';

const initialState = {
  operand1: null,
  operand2: null,
  operator: null
};

const reducer = (state, { type, payload }) => {
  switch(type) {
    case 'ENTER_NUM':
      return state.operator
      ? {
        ...state,
        operand2: appendDigit(state.operand2, payload)
      }
      : {
        ...state,
        operand1: appendDigit(state.operand1, payload)
      };
    case 'ENTER_OPERATOR':
      return {
        ...state,
        operator: payload
      };
    case 'CLEAR':
      return {
        ...initialState
      };
    case 'CALCULATE':
      return {
        operand1: calc(state),
        operand2: null,
        operator: null
      };
    default:
      return {
        ...state
      };
  }
};

const appendDigit = (acc, val) => {
  return (acc * 10) + val;
};

const calc = ({ operand1, operand2, operator }) => {
  switch (operator) {
    case 'ADD':
      return operand1 + operand2;
    case 'SUBTRACT':
      return operand1 - operand2;
    case 'MULTIPLY':
      return operand1 * operand2;
    case 'DIVIDE':
      return operand1 / operand2;
    default:
      return NaN;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="app-base">
      <Display />
      <NumBtn
        text="clear"
        gridArea="clear"
      />
      <Keypad />
      <Operators />
    </div>
  );
};

export default App;
