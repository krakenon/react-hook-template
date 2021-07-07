import IntlMessages from '@kongd/components/IntlMessages';
import { Button } from 'antd';
import React from 'react';

const Callouts = ({ styleName, callout }) => {
  const { image, title, description } = callout;
  return (
    <div className={`kd-product-row ${styleName}`}>
      <div className="kd-product-col kd-product-thumb ">
        <div className="kd-grid-thumb-equal">
          <span className="kd-link kd-grid-thumb-cover">
            <img alt="Special Edition Party Spas" src={image} />
          </span>
        </div>
      </div>
      <div className="kd-product-col kd-product-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Button type="primary">
          {<IntlMessages id="callouts.viewRange" />}
        </Button>
      </div>
    </div>
  );
};

export default Callouts;
