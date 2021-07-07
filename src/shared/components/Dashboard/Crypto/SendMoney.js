import Widget from '@kongd/components/Widget';
import { Table } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Account Holder Name',
    dataIndex: 'image',
    render: (text, record) => {
      return (
        <div className="kd-flex-row kd-align-items-center">
          <img
            className="kd-rounded-circle kd-size-30 kd-mr-2"
            src={text}
            alt=""
          />
          <p className="kd-mb-0">{record.name}</p>
        </div>
      );
    },
  },
  {
    title: 'Last Transfer',
    dataIndex: 'transfer',
    render: (text, record) => {
      return <span className="kd-text-grey">{record.transfer}</span>;
    },
  },
  {
    title: 'Action',
    dataIndex: 'status',
    render: (text) => {
      return (
        <span className="kd-text-primary kd-pointer">
          <i className="icon icon-forward kd-fs-sm kd-mr-2" />
          {text}
        </span>
      );
    },
  },
];

const data = [
  {
    key: '1',
    name: 'Jeniffer L.',
    transfer: '2 hrs. ago',
    image: require('assets/images/avatar/a5.png'),
    status: 'Pay',
  },
  {
    key: '2',
    name: 'Jim Green',
    transfer: '17 days ago',
    image: require('assets/images/avatar/a6.png'),
    status: 'Pay',
  },
  {
    key: '3',
    name: 'Joe Black',
    transfer: '1 month ago',
    image: require('assets/images/avatar/a7.png'),
    status: 'Pay',
  },
  {
    key: '4',
    name: 'Mila Alba',
    transfer: '1 month ago',
    image: require('assets/images/avatar/a10.png'),
    status: 'Pay',
  },
];

const SendMoney = () => {
  return (
    <Widget
      title={<h2 className="h4 kd-text-capitalize kd-mb-0">Send Money to</h2>}
      extra={
        <p className="kd-text-primary kd-mb-0 kd-pointer kd-d-none kd-d-sm-block">
          <i className="icon icon-add-circle kd-fs-lg kd-d-inline-flex kd-vertical-align-middle" />{' '}
          Add New Account
        </p>
      }
    >
      <div className="kd-table-responsive">
        <Table
          className="kd-table-no-bordered"
          columns={columns}
          dataSource={data}
          pagination={false}
          size="small"
        />
      </div>
      <p className="kd-text-primary kd-mb-0 kd-pointer kd-d-block kd-d-sm-none kd-mb-0 kd-mt-3">
        <i className="icon icon-add-circle kd-fs-lg kd-d-inline-flex kd-vertical-align-middle" />{' '}
        Add New Account
      </p>
    </Widget>
  );
};

export default SendMoney;
