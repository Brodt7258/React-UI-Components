import React, { useReducer } from 'react';
import './App.css';

import { ENTER_NUM, ENTER_OPERATOR, CLEAR, CALCULATE } from './utils/types';
import { reducer, initialState } from './utils/helpers';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumBtn from './components/ButtonComponents/NumberButton';
import Keypad from './components/ButtonComponents/Keypad';
import Operators from './components/ButtonComponents/Operators';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  return (
    <div className="app-base">
      <Display />
      <NumBtn
        text="clear"
        gridArea="clear"
        handleClick={() => {
          dispatch({
            type: CLEAR
          });
        }}
      />
      <Keypad 
        handleEnterNum={n => () => {
          dispatch({
            type: ENTER_NUM,
            payload: n
          });
        }}
      />
      <Operators
        handleEnterOp={op => () => {
          dispatch({
            type: ENTER_OPERATOR,
            payload: op
          });
        }}
        handleCalc={() => {
          dispatch({
            type: CALCULATE
          })
        }}
      />
    </div>
  );
};

export default App;
