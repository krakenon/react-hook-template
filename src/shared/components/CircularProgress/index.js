import loader from '@kongd/assets/images/loader.svg';
import React from 'react';

const CircularProgress = ({ className }) => (
  <div className={`loader ${className}`}>
    <img src={loader} alt="loader" />
  </div>
);
export default CircularProgress;
