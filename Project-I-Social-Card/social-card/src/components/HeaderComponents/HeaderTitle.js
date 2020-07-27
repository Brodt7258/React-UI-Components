import moment from 'moment';

import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  const now = moment();

  return (
    <h2>
      Lambda School
      <span>@LambdaSchool • {now.format('DD MMM')}</span>
    </h2>
  );
};

export default HeaderTitle;
