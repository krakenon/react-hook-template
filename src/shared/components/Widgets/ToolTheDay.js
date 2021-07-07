import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const ToolTheDay = () => {
  return (
    <Widget styleName="kd-card-full kd-text-center">
      <div className="kd-pt-4 kd-px-3">
        <div className="kd-separator kd-bg-success-dark" />
        <h2 className="kd-mb-4 kd-text-success-dark">Tool's Day</h2>
        <img
          className="kd-mb-4 kd-rounded-circle kd-img-fluid kd-object-cover"
          src={'https://via.placeholder.com/120x120'}
          alt="spoons"
        />
      </div>
      <Button
        type="primary"
        className="kd-mt-sm-4 kd-fs-sm kd-btn-block kd-mb-0 kd-text-uppercase kd-border-radius-top-left-0 kd-border-radius-top-right-0"
        size="large"
        htmlType="submit"
        block
      >
        learn more
      </Button>
    </Widget>
  );
};

export default ToolTheDay;
