import React, { useReducer } from 'react';
import './App.css';

import { ENTER_NUM, ENTER_OPERATOR, CLEAR, CALCULATE } from './utils/types';
import { reducer, initialState } from './utils/helpers';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumBtn from './components/ButtonComponents/NumberButton';
import Keypad from './components/ButtonComponents/Keypad';
import Operators from './components/ButtonComponents/Operators';

const App = () => {
  const [ { operand1, operand2, operator }, dispatch] = useReducer(reducer, initialState);

  const clearState = () => {
    dispatch({
      type: CLEAR
    });
  };

  const enterNum = n => () => {
    dispatch({
      type: ENTER_NUM,
      payload: n
    });
  };

  const enterOperator = op => () => {
    dispatch({
      type: ENTER_OPERATOR,
      payload: op
    });
  };

  const calculate = () => {
    dispatch({
      type: CALCULATE
    });
  };

  //console.log(state);
  return (
    <div className="app-base">
      <Display 
        val1={operator ? operand2 : operand1}
        op={operator}
        val2={operator ? operand1 : operand2}
      />
      <NumBtn
        text="clear"
        gridArea="clear"
        handleClick={clearState}
      />
      <Keypad handleEnterNum={enterNum} />
      <Operators 
        handleEnterOp={enterOperator}
        handleCalc={calculate}
      />
    </div>
  );
};

export default App;
