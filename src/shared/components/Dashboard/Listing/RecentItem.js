import React from 'react';

const RecentItem = ({ data }) => {
  const { title, avatar, description } = data;
  return (
    <div className="kd-media kd-flex-nowrap">
      <img className="kd-mr-3 kd-size-60 kd-rounded-lg" src={avatar} />
      <div className="kd-media-body">
        <div className="">
          <h4 className="kd-text-truncate kd-task-item-title">{title}</h4>
          <p className="kd-text-grey kd-fs-sm kd-mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
