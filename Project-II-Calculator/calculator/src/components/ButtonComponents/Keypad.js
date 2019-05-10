import React, { Fragment } from 'react';

import NumBtn from './NumberButton';

export default () => {
  return (
    <Fragment>
      <NumBtn text="0" gridArea="zero" />
      <NumBtn text="1" gridArea="one" />
      <NumBtn text="2" gridArea="two" />
      <NumBtn text="3" gridArea="three" />
      <NumBtn text="4" gridArea="four" />
      <NumBtn text="5" gridArea="five" />
      <NumBtn text="6" gridArea="six" />
      <NumBtn text="7" gridArea="seven" />
      <NumBtn text="8" gridArea="eight" />
      <NumBtn text="9" gridArea="nine" />
    </Fragment>
  );
};