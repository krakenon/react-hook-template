import PropTypes from 'prop-types';
import React from 'react';

const CardBox = ({ heading, children, styleName, childrenStyle }) => {
  return (
    <div className={`kd-card ${styleName}`}>
      {heading && (
        <div className="kd-card-head">
          <h3 className="kd-card-title">{heading}</h3>
        </div>
      )}
      <div className={`kd-card-body ${childrenStyle}`}>{children}</div>
    </div>
  );
};

export default CardBox;

CardBox.propTypes = {
  children: PropTypes.node.isRequired,
};

CardBox.defaultProps = {
  styleName: '',
  childrenStyle: '',
};
