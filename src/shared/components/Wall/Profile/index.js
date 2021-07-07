import Auxiliary from '@kongd/components/Auxiliary';
import { Button } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Profile = (props) => {
  const [isFollow, setIsFollow] = useState(false);

  const authUser = useSelector(({ auth }) => auth.authUser);

  const handleToggle = () => {
    setIsFollow((previousState) => ({
      isFollow: !previousState.isFollow,
    }));
  };

  const { user, userInfo } = props;
  const { id, name, image, address } = user;
  const { followers, following, frinds } = userInfo;
  return (
    <Auxiliary>
      <div className="kd-profileon">
        <div className="kd-profileon-thumb kd-profileon-thumb-htctrcrop">
          <img src={image} alt="" />
        </div>
        <div className="kd-profileon-content">
          <p className="kd-profileon-title">{name}</p>
          <span className="kd-fs-sm">{address}</span>
        </div>
      </div>

      <div className="kd-follower kd-text-center">
        <ul className="kd-follower-list">
          <li>
            <span className="kd-follower-title">{followers}</span>
            <span>Followers</span>
          </li>
          <li>
            <span className="kd-follower-title">{following}</span>
            <span>Following</span>
          </li>
          <li>
            <span className="kd-follower-title">{frinds}</span>
            <span>project</span>
          </li>
        </ul>
      </div>
      <div className="kd-mb-xl-4 kd-mb-3">
        <p>You are following {name}</p>
        {authUser === id ? null : (
          <Button
            className="kd-btn-sm kd-mb-0"
            type="primary"
            onClick={handleToggle}
          >
            {isFollow === true ? 'Follow' : 'Unfollow'}
          </Button>
        )}
      </div>
    </Auxiliary>
  );
};

export default Profile;
