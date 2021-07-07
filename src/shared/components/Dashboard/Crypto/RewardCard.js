import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const RewardCard = () => {
  return (
    <Widget styleName="kd-bg-dark-primary">
      <div className="kd-flex-row kd-justify-content-center kd-mb-3 kd-mb-md-4">
        <i className={`icon icon-refer kd-fs-xlxl kd-text-white`} />
      </div>
      <div className="kd-text-center">
        <h2 className="h3 kd-mb-3 kd-text-white">Reffer and Get Reward</h2>
        <p className="kd-text-white kd-mb-3">
          Reffer us to your friends and earn bonus when they join.
        </p>
        <Button size="large" className="kd-btn-secondary kd-mt-md-5 kd-mb-1">
          Invite Friends
        </Button>
      </div>
    </Widget>
  );
};

export default RewardCard;
