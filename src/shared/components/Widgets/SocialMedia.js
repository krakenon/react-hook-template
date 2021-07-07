import Widget from '@kongd/components/Widget';
import { Button } from 'antd';
import React from 'react';

const SocialMedia = () => {
  const ButtonGroup = Button.Group;
  return (
    <Widget>
      <div>
        <div className="ant-card-head-title kd-mb-3">Social Media</div>
        <h2 className="kd-mb-3">Digital Media Marketing Online Webbinar</h2>
        <p className="kd-text-grey kd-fs-sm">27th Aug, 09:30 pm EST</p>
        <p>Learn from experts. This webinar explains right..</p>
        <h4 className="kd-text-primary kd-mb-3 kd-mb-sm-4">
          Are You ready to join?
        </h4>
        <ButtonGroup className="kd-mb-1">
          <Button className="kd-mb-0" type="primary">
            Yes
          </Button>
          <Button className="kd-btn-warning kd-mb-0">Maybe</Button>
          <Button className="kd-btn-light kd-mb-0">No</Button>
        </ButtonGroup>
      </div>
    </Widget>
  );
};

export default SocialMedia;
