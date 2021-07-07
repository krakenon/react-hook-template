import Widget from '@kongd/components/Widget';
import { THEME_TYPE_DARK } from '@kongd/constants';
import React from 'react';
import { connect } from 'react-redux';

const IconWithTextCard = (props) => {
  const { icon, title, subTitle } = props;
  let { iconColor } = props;
  if (props.themeType === THEME_TYPE_DARK) {
    iconColor = 'white';
  }

  return (
    <Widget>
      <div className="kd-media kd-align-items-center kd-flex-nowrap">
        <div className="kd-mr-lg-4 kd-mr-3">
          <i
            className={`icon icon-${icon} kd-fs-xlxl kd-text-${iconColor} kd-d-flex`}
            style={{ fontSize: 45 }}
          />
        </div>
        <div className="kd-media-body">
          <h1 className="kd-fs-xxxl kd-font-weight-medium kd-mb-1">{title}</h1>
          <p className="kd-text-grey kd-mb-0">{subTitle}</p>
        </div>
      </div>
    </Widget>
  );
};

const mapStateToProps = ({ settings }) => {
  const { themeType } = settings;
  return { themeType };
};
export default connect(mapStateToProps, null)(IconWithTextCard);
