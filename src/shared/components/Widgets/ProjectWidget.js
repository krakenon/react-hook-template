import Widget from '@kongd/components/Widget';
import { Avatar, Dropdown, Menu } from 'antd';
import React from 'react';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const ProjectWidget = () => {
  return (
    <Widget
      styleName="kd-ch-capitalize kd-card-sm-px"
      extra={
        <ul className="kd-list-inline kd-ml-auto kd-mb-0 kd-text-grey">
          <li>
            <i className="icon icon-sweet-alert" />
          </li>
          <li>
            <i className="icon icon-invert-color" />
          </li>
          <li>
            <Dropdown overlay={menu} trigger={['click']}>
              <span className="kd-link ant-dropdown-link kd-text-grey">
                <i className="icon icon-chevron-down" />
              </span>
            </Dropdown>
          </li>
        </ul>
      }
      title="Project Widget"
    >
      <div className="kd-text-center kd-pt-sm-3">
        <img
          className="kd-size-60 kd-mb-3"
          src={require('assets/images/widget/birds.png')}
          alt="birds"
        />

        <h2 className="kd-mb-3 kd-mb-sm-4">Eagal Hunt App</h2>

        <ul className="kd-list-inline kd-mb-3 kd-mb-lg-4">
          <li>
            <Avatar src={'https://via.placeholder.com/150x150'} />
          </li>
          <li>
            <Avatar src={'https://via.placeholder.com/150x150'} />
          </li>
          <li>
            <Avatar src={'https://via.placeholder.com/150x150'} />
          </li>
          <li>
            <Avatar className="kd-bg-primary kd-text-white">Ms</Avatar>
          </li>
          <li>
            <span className="ant-avatar kd-border kd-border-grey kd-bg-transparent kd-text-grey">
              <i className="icon icon-add" />
            </span>
          </li>
        </ul>
        <button className="kd-btn kd-btn-primary kd-text-white kd-mb-1">
          Go to project
        </button>
      </div>
    </Widget>
  );
};

export default ProjectWidget;
