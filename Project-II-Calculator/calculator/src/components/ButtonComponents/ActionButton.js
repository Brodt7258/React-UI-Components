import React from 'react';
import './Button.css';

export default ({ text, gridArea, background, color, handleClick }) => {
  return (
    <button style={{ background, gridArea }} className="btn-base action-btn" onClick={handleClick}>
      <h3 style={{ color }} className="action-btn-content">
        {text}
      </h3>
    </button>
  );
};