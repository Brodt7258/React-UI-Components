import React, { Fragment } from 'react';

import { ADD, SUBTRACT, MULTIPLY, DIVIDE } from '../../utils/types';

import ActionBtn from './ActionButton';

export default ({ handleEnterOp, handleCalc }) => {
  return (
    <Fragment>
      <ActionBtn text="÷" gridArea="divide" handleClick={handleEnterOp(DIVIDE)} />
      <ActionBtn text="×" gridArea="multiply" handleClick={handleEnterOp(MULTIPLY)} />
      <ActionBtn text="-" gridArea="subtract" handleClick={handleEnterOp(SUBTRACT)} />
      <ActionBtn text="+" gridArea="add" handleClick={handleEnterOp(ADD)} />
      <ActionBtn text="=" gridArea="equals" handleClick={handleCalc} />
    </Fragment>
  );
};