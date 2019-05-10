import React from 'react';
import './Button.css';

export default ({ text, gridArea }) => {
  return (
    <div style={{ gridArea }} className="num-btn">
      <h3 className="num-btn-content">
        {text}
      </h3>
    </div>
  );
};