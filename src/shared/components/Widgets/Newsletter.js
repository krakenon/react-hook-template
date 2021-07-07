import Widget from '@kongd/components/Widget';
import { Button, Form, Input } from 'antd';
import React from 'react';

const Newsletter = () => {
  return (
    <Widget
      title={
        <h4 className="kd-text-primary kd-text-capitalize kd-mb-0">
          <i className="icon icon-mail-open kd-mr-3" />
          Newsletter Subscription
        </h4>
      }
    >
      <h2 className="kd-mb-3 kd-mb-xxl-4 kd-font-weight-light">
        Dont's miss our weekly news and updates
      </h2>
      <Form className="kd-signup-form kd-form-row0 kd-mb-0">
        <div className="kd-mb-3">
          <Input placeholder="Username" />
        </div>
        <Button type="primary" className="kd-mb-0" htmlType="submit">
          Subscribe
        </Button>
      </Form>
    </Widget>
  );
};

export default Newsletter;
