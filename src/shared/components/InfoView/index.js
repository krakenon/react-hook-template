import Auxiliary from '@kongd/components/Auxiliary';
import CircularProgress from '@kongd/components/CircularProgress';
import { hideMessage } from '@kongd/redux/actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const InfoView = () => {
  const dispatch = useDispatch();

  const error = useSelector(({ common }) => common.error);

  const loading = useSelector(({ common }) => common.loading);

  const message = useSelector(({ common }) => common.message);

  const displayMessage = message;

  useEffect(() => {
    if (error || message) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 3000);
    }
  }, [error, message, dispatch]);

  return (
    <Auxiliary>
      {loading && (
        <div className="kd-loader-view kd-loader-position">
          <CircularProgress />
        </div>
      )}
      {error && message.error(<span id="message-id">{error}</span>)}
      {displayMessage &&
        message.info(<span id="message-id">{displayMessage}</span>)}
    </Auxiliary>
  );
};

export default InfoView;
