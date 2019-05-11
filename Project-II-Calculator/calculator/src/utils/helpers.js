import { ENTER_NUM, ENTER_OPERATOR, CLEAR, CALCULATE, ADD, SUBTRACT, MULTIPLY, DIVIDE } from './types';

export const initialState = {
  operand1: null,
  operand2: null,
  operator: null
};

export const reducer = (state, { type, payload }) => {
  switch(type) {
    case ENTER_NUM:
      return state.operator
      ? {
        ...state,
        operand2: appendDigit(state.operand2, payload)
      }
      : {
        ...state,
        operand1: appendDigit(state.operand1, payload)
      };
    case ENTER_OPERATOR:
      return {
        ...state,
        operator: payload
      };
    case CLEAR:
      return {
        ...initialState
      };
    case CALCULATE:
      return {
        operand1: calcResult(state),
        operand2: null,
        operator: null
      };
    default:
      return {
        ...state
      };
  }
};

const calcResult = ({ operand1, operand2, operator }) => {
  switch (operator) {
    case ADD:
      return operand1 + operand2;
    case SUBTRACT:
      return operand1 - operand2;
    case MULTIPLY:
      return operand1 * operand2;
    case DIVIDE:
      return operand1 / operand2;
    default:
      return NaN;
  }
};

const appendDigit = (acc, val) => {
  return (acc * 10) + val;
};