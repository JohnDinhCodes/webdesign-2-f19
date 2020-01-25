import React from 'react';

// Stylesheet
import './backdrop.styles.css';

export const Backdrop = ({ menuState }) => {
  return <div className={`backdrop${menuState ? ' active' : ''}`}></div>;
};
