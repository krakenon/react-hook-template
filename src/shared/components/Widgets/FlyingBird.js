import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const FlyingBird = () => {
  return (
    <Widget>
      <div className="kd-media kd-align-items-center kd-mb-4">
        <div className="kd-mr-3">
          <img src={require('assets/images/widget/flying.png')} alt="flying" />
        </div>
        <div className="kd-media-body">
          <h2 className="kd-mb-1">Flying bird</h2>
          <p className="kd-text-grey kd-mb-0">Bob Bush</p>
        </div>
      </div>
      <p className="kd-mb-4">
        Some description about the card. This widget could be used to describe a
        project, a product, user’s profile or may be more.
      </p>
      <Button type="primary" className="kd-mb-1" htmlType="submit">
        Subscribe
      </Button>
    </Widget>
  );
};

export default FlyingBird;
