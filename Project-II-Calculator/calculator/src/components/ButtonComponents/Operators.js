import React, { Fragment } from 'react';

import ActionBtn from './ActionButton';

export default () => {
  return (
    <Fragment>
      <ActionBtn text="÷" gridArea="divide" />
      <ActionBtn text="×" gridArea="multiply" />
      <ActionBtn text="-" gridArea="subtract" />
      <ActionBtn text="+" gridArea="add" />
      <ActionBtn text="=" gridArea="equals" />
    </Fragment>
  );
};