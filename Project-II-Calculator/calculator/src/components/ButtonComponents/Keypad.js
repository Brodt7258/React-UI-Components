import React, { Fragment } from 'react';

import NumBtn from './NumberButton';

export default ({ handleEnterNum }) => {
  return (
    <Fragment>
      <NumBtn text="0" gridArea="zero" handleClick={handleEnterNum(0)} />
      <NumBtn text="1" gridArea="one" handleClick={handleEnterNum(1)} />
      <NumBtn text="2" gridArea="two" handleClick={handleEnterNum(2)} />
      <NumBtn text="3" gridArea="three" handleClick={handleEnterNum(3)} />
      <NumBtn text="4" gridArea="four" handleClick={handleEnterNum(4)} />
      <NumBtn text="5" gridArea="five" handleClick={handleEnterNum(5)} />
      <NumBtn text="6" gridArea="six" handleClick={handleEnterNum(6)} />
      <NumBtn text="7" gridArea="seven" handleClick={handleEnterNum(7)} />
      <NumBtn text="8" gridArea="eight" handleClick={handleEnterNum(8)} />
      <NumBtn text="9" gridArea="nine" handleClick={handleEnterNum(9)} />
    </Fragment>
  );
};