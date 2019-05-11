import React from 'react';
import './Button.css';

export default ({ text, gridArea, handleClick }) => {
  return (
    <button style={{ gridArea }} className="btn-base num-btn" onClick={handleClick}>
      <h3 className="num-btn-content">
        {text}
      </h3>
    </button>
  );
};