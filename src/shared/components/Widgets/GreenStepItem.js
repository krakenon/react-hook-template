import Auxiliary from '@kongd/components/Auxiliary';
import React from 'react';

const GreenStepItem = ({ data }) => {
  const { title, subTitle, desc } = data;
  return (
    <Auxiliary>
      <h2 className="h3 kd-mb-2">{title}</h2>
      <p className="kd-text-grey">{subTitle}</p>
      <p>{desc}</p>
    </Auxiliary>
  );
};

export default GreenStepItem;
