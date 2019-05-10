import React from 'react';
import './App.css';

import Display from './components/DisplayComponents/CalculatorDisplay';
import NumBtn from './components/ButtonComponents/NumberButton';
import Keypad from './components/ButtonComponents/Keypad';
import Operators from './components/ButtonComponents/Operators';

const App = () => {
  return (
    <div className="app-base">
      <Display />
      <NumBtn text="clear" gridArea="clear" />
      <Keypad />
      <Operators />
    </div>
  );
};

export default App;
