import { Avatar, Button } from 'antd';
import React, { useEffect, useState } from 'react';

import DisplayDate from '../DisplayDate';

const CommentBox = (props) => {
  const [isComment, setIsComment] = useState(false);

  const [commentData, setCommentData] = useState({
    id: 0,
    user: {},
    isLike: true,
    likeCount: 0,
    date: '',
    commentList: [],
    comment: '',
  });

  const _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommentToggle();
    }
  };

  useEffect(() => {
    setCommentData(props.commentData);
  }, [props.commentData]);

  const handleLikeToggle = () => {
    setCommentData({
      ...commentData,
      isLike: !commentData.isLike,
      likeCount:
        commentData.isLike === true
          ? commentData.likeCount - 1
          : commentData.likeCount + 1,
    });
  };

  const handleCommentToggle = () => {
    setIsComment((previousState) => ({
      isComment: !previousState.isComment,
    }));
  };

  const { user, isLike, date, comment } = commentData;
  return (
    <div className="kd-media kd-flex-nowrap kd-wall-user-info kd-mb-3">
      <Avatar className="kd-mr-3 kd-size-40" src={user.image} />
      <div className="kd-media-body">
        <h5 className="kd-wall-user-title">{user.name}</h5>
        <DisplayDate date={date} />
        <p className="kd-mt-2">{comment}</p>
        <div className="kd-flex-row">
          <Button type="primary" size="small" onClick={handleLikeToggle}>
            {isLike === true ? 'Like' : 'UnLike'}
          </Button>
          <Button
            className="kd-btn-primary-light"
            size="small"
            onClick={handleCommentToggle}
          >
            Comment
          </Button>
        </div>
        {isComment === true ? (
          <div className="kd-media">
            <Avatar className="kd-mr-3 kd-size-30" src={user.image} />
            <div className="kd-media-body">
              <input
                id="required"
                className="kd-border-0 ant-input"
                placeholder="Type Comments"
                onKeyPress={(event) => _handleKeyPress(event)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CommentBox;
