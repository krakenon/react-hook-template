import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const CurrentPlan = () => {
  return (
    <Widget
      title={
        <h2 className="h4 kd-text-capitalize kd-mb-0">Your Current Plan</h2>
      }
      extra={
        <span className="kd-text-primary kd-fs-md kd-pointer kd-ml-auto kd-oth-plans-up">
          Other plans{' '}
          <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
        </span>
      }
    >
      <div className="kd-currentplan-row">
        <div className="kd-currentplan-col">
          <h2 className="kd-text-primary kd-fs-xlxl kd-font-weight-medium kd-mb-1">
            $19<sub className="kd-fs-md kd-bottom-0">/month</sub>
          </h2>
          <p className="kd-mb-1">
            <span className="kd-size-8 kd-bg-dark kd-rounded-xs kd-d-inline-block kd-mr-1" />{' '}
            Max listing items 2K
          </p>
          <p>
            <span className="kd-size-8 kd-bg-dark kd-rounded-xs kd-d-inline-block kd-mr-1" />{' '}
            Max agents - 10
          </p>
        </div>
        <div className="kd-currentplan-col kd-currentplan-right">
          <div className="kd-currentplan-right-content">
            <p className="kd-text-red">Expires in 80 days</p>
            <Button className="kd-btn kd-btn-orange kd-mb-0 kd-mr-0 kd-text-uppercase">
              Renew Plan
            </Button>
            <span className="kd-text-primary kd-fs-md kd-pointer kd-mts-3 kd-oth-plans-down">
              Other plans{' '}
              <i className="icon icon-long-arrow-right kd-fs-xxl kd-ml-2 kd-d-inline-flex kd-vertical-align-middle" />
            </span>
          </div>
        </div>
      </div>
    </Widget>
  );
};

export default CurrentPlan;
