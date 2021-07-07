import { Avatar, Card } from 'antd';
import React, { useEffect, useState } from 'react';

import DisplayDate from '../DisplayDate';
import CommentBox from './CommentBox';
import MediaList from './MediaList';

const PostItem = (props) => {
  const [message, setMessage] = useState('');

  const [post, setPost] = useState({
    id: 0,
    text: '',
    user: {},
    date: '',
    mediaList: [],
    viewCount: 0,
    likeCount: 0,
    isLike: false,
    commentList: [],
  });

  useEffect(() => {
    setPost(props.postData);
  }, [props.postData]);

  const _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const commentData = {
        user: props.user,
        comment: message,
        date: new Date().toString(),
        likeCount: 0,
        isLike: true,
        commentList: [],
      };

      let commentArray = post.commentList;
      commentArray.push(commentData);
      setPost({ ...post, commentList: commentArray });
      setMessage('');
    }
  };

  const updateCommentValue = (evt) => {
    setMessage(evt.target.value);
  };

  const handleLikeToggle = () => {
    setPost({
      ...post,
      isLike: !post.isLike,
      likeCount: post.isLike === true ? post.likeCount - 1 : post.likeCount + 1,
    });
  };

  const {
    user,
    date,
    mediaList,
    viewCount,
    likeCount,
    isLike,
    commentList,
    text,
  } = post;
  return (
    <Card className="kd-card">
      <div className="kd-wall-content">
        <div className="kd-media kd-wall-user-info kd-flex-nowrap kd-align-items-center">
          <Avatar className="kd-mr-3 kd-mb-2 kd-size-50" src={user.image} />
          <div className="kd-media-body">
            <h5 className="kd-wall-user-title">{user.name}</h5>
            <DisplayDate date={date} />
          </div>
        </div>
        <p>{text}</p>
        <div className="kd-wall-medialist">
          {mediaList.length > 0 ? <MediaList mediaList={mediaList} /> : null}
        </div>
        <div className="kd-flex-row kd-mb-2 kd-mb-xl-3">
          <p className="kd-fs-sm kd-pointer kd-mr-3 kd-text-grey">
            <i className="icon icon-view-o kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle" />
            <span className="kd-d-inline-flex kd-vertical-align-middle">
              {viewCount > 0 ? viewCount + ' Views' : 'Views'}
            </span>
          </p>
          <p
            className="kd-fs-sm kd-pointer kd-mr-3 kd-text-grey"
            onClick={handleLikeToggle}
          >
            {isLike === true ? (
              <i
                className="icon icon-like kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle"
                style={{ color: 'blue' }}
              />
            ) : (
              <i className="icon icon-like-o kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle" />
            )}
            <span className="kd-d-inline-flex kd-vertical-align-middle">
              {likeCount > 0 ? likeCount + ' Likes' : 'Likes'}
            </span>
          </p>
          <p className="kd-fs-sm kd-pointer kd-mr-3 kd-text-grey">
            <i className="icon icon-chat-bubble kd-fs-lg kd-mr-2 kd-d-inline-flex kd-vertical-align-middle" />
            <span className="kd-d-inline-flex kd-vertical-align-middle">
              {commentList.length > 0
                ? commentList.length + ' Comments'
                : 'Comments'}
            </span>
          </p>
        </div>

        <div className="kd-wall-comment-box">
          {commentList.map((commentData, index) => (
            <CommentBox key={index} index={index} commentData={commentData} />
          ))}
        </div>
        <div className="kd-wall-comment-box">
          <div className="kd-media kd-mb-2">
            <Avatar className="kd-mr-3 kd-size-36" src={user.image} />
            <div className="kd-media-body">
              <textarea
                id="required"
                className="kd-border-0 ant-input"
                onChange={(event) => updateCommentValue(event)}
                onKeyPress={(event) => _handleKeyPress(event)}
                value={message}
                placeholder="Type Comments"
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostItem;
