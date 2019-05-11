import React from 'react';
import './Button.css';

export default ({ text, gridArea, background, color }) => {
  return (
    <div style={{ background, gridArea }} className="btn-base action-btn">
      <h3 style={{ color }} className="action-btn-content">
        {text}
      </h3>
    </div>
  );
};