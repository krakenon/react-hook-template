import { Avatar } from 'antd';
import React from 'react';

const ProfileHeader = () => {
  return (
    <div className="kd-profile-banner">
      <div className="kd-profile-container">
        <div className="kd-profile-banner-top">
          <div className="kd-profile-banner-top-left">
            <div className="kd-profile-banner-avatar">
              <Avatar
                className="kd-size-90"
                alt="..."
                src={'https://via.placeholder.com/150x150'}
              />
            </div>
            <div className="kd-profile-banner-avatar-info">
              <h2 className="kd-mb-2 kd-mb-sm-3 kd-fs-xxl kd-font-weight-light">
                Kiley Brown
              </h2>
              <p className="kd-mb-0 kd-fs-lg">Florida, USA</p>
            </div>
          </div>
          <div className="kd-profile-banner-top-right">
            <ul className="kd-follower-list">
              <li>
                <span className="kd-follower-title kd-fs-lg kd-font-weight-medium">
                  2k+
                </span>
                <span className="kd-fs-sm">Followers</span>
              </li>
              <li>
                <span className="kd-follower-title kd-fs-lg kd-font-weight-medium">
                  847
                </span>
                <span className="kd-fs-sm">Following</span>
              </li>
              <li>
                <span className="kd-follower-title kd-fs-lg kd-font-weight-medium">
                  327
                </span>
                <span className="kd-fs-sm">Friends</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="kd-profile-banner-bottom">
          <div className="kd-tab-list">
            <ul className="kd-navbar-nav">
              <li>
                <span className="kd-link">Timeline</span>
              </li>
              <li>
                <span className="kd-link">About</span>
              </li>
              <li>
                <span className="kd-link">Photos</span>
              </li>
              <li>
                <span className="kd-link">
                  Friends <span className="kd-fs-xs">287</span>
                </span>
              </li>
              <li>
                <span className="kd-link">More</span>
              </li>
            </ul>
          </div>
          <span className="kd-link kd-profile-setting">
            <i className="icon icon-setting kd-fs-lg kd-mr-2 kd-mr-sm-3 kd-d-inline-flex kd-vertical-align-middle" />
            <span className="kd-d-inline-flex kd-vertical-align-middle kd-ml-1 kd-ml-sm-0">
              Setting
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
