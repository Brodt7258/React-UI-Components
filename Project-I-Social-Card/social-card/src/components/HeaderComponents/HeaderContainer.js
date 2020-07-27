import React, { Fragment } from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <Fragment>
      <ImageThumbnail />
      <div className="header-content">
        <HeaderTitle />
        <HeaderContent />
      </div>
    </Fragment>
  );
};

export default HeaderContainer;
