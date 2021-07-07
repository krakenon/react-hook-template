import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const DryFruit = () => {
  return (
    <Widget styleName="kd-card-full kd-text-center kd-pt-4 kd-pb-3 kd-px-3">
      <div className="kd-separator kd-bg-sepia" />
      <h2 className="kd-mb-4 kd-text-sepia">Dry Fruit</h2>
      <div className="kd-d-block">
        <img
          className="kd-mb-4 kd-rounded-circle kd-img-fluid kd-object-cover"
          src={'https://via.placeholder.com/120x120'}
          alt="khajoor"
        />
      </div>
      <Button
        className="kd-btn-sepia kd-text-uppercase kd-fs-sm kd-mb-2"
        htmlType="submit"
      >
        Add to Cart
      </Button>
    </Widget>
  );
};

export default DryFruit;
