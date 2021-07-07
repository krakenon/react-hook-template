import Widget from '@kongd/components/Widget';
import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const Option = Select.Option;
const FormItem = Form.Item;

const CurrencyCalculator = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Widget
      title={
        <h2 className="h4 kd-mb-0 kd-text-capitalize">Currency Calculator</h2>
      }
    >
      <p className="kd-mb-2">1.87 BTC equals</p>
      <h1 className="kd-mb-2 kd-text-primary kd-font-weight-medium kd-fs-xxl">
        11466.78 USD
      </h1>
      <p className="kd-text-grey kd-fs-sm kd-mb-3 kd-mb-lg-4">
        @ 1 BTC = 6718.72 USD
      </p>
      <Form
        layout="inline"
        className="kd-form-inline-label-up kd-form-inline-currency"
      >
        <FormItem label="From" className="kd-form-item-one-fourth">
          <Select defaultValue="BTC" onChange={handleChange}>
            <Option value="jack">BTC</Option>
            <Option value="lucy">USD</Option>
          </Select>
        </FormItem>
        <FormItem label="To" className="kd-form-item-one-fourth">
          <Select defaultValue="BTC" onChange={handleChange}>
            <Option value="jack">BTC</Option>
            <Option value="lucy">USD</Option>
          </Select>
        </FormItem>
        <FormItem label="Amount (BTC)" className="kd-form-item-two-fourth">
          <Input placeholder="0.0" />
        </FormItem>
        <FormItem className="kd-d-block kd-mb-1">
          <Button className="kd-mb-0" type="primary">
            Transfer Now
          </Button>
        </FormItem>
      </Form>
    </Widget>
  );
};

export default CurrencyCalculator;
