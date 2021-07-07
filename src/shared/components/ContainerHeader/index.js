import React from 'react';

const ContainerHeader = ({ title }) => {
  return (
    <div className="kd-page-heading">
      <h2 className="kd-page-title">{title}</h2>
    </div>
  );
};

export default ContainerHeader;
