import Aux from '@kongd/components/Auxiliary';
import { Avatar, Checkbox, Tag, Tooltip } from 'antd';
import React from 'react';

import { taskTags } from '../../../../src/routes/main/dashboard/CRM/data';

const getTags = (tags) => {
  return taskTags.map((tag, index) => {
    if (tags.includes(tag.id)) {
      return (
        <Tooltip key={index} title={tag.name}>
          <li className={`kd-text-${tag.color}`}>
            <i className="icon icon-circle kd-fs-xxs" />
          </li>
        </Tooltip>
      );
    }
    return null;
  });
};

const TaskItem = ({ data, onChange }) => {
  const { title, tags, completed, user, dueDate } = data;
  return (
    <Aux>
      <div className="kd-media kd-task-list-item kd-flex-nowrap">
        <div className="kd-mr-3">
          <Checkbox checked={completed} onChange={() => onChange(data)} />
        </div>
        <div className="kd-media-body kd-task-item-content">
          <div className="kd-task-item-content-left">
            <p
              className={`kd-text-truncate kd-mb-0 ${
                completed ? 'kd-text-strikethrough' : 'kd-text-hover'
              }`}
            >
              {title}
            </p>
          </div>
          <div className="kd-task-item-content-right">
            <Avatar
              className="kd-ml-sm-3 kd-size-30 kd-order-sm-3"
              src={user.avatar}
            />
            <Tag className="kd-bg-grey kd-text-grey kd-ml-3 kd-mr-0 kd-mb-0 kd-rounded-xxl kd-order-sm-2">
              {user.projectName}
            </Tag>
            <ul className="kd-dot-list kd-mb-0 kd-order-sm-1 kd-ml-2">
              {getTags(tags)}
            </ul>
            <span className="kd-fs-sm kd-text-grey kd-ml-3 kd-task-date kd-order-sm-4">
              {dueDate}
            </span>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default TaskItem;
