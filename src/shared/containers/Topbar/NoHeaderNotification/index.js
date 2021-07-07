import IntlMessages from '@kongd/components/IntlMessages';
import { toggleCollapsedSideNav } from '@kongd/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const NoHeaderNotification = () => {
  const dispatch = useDispatch();
  const { navCollapsed } = useSelector(({ common }) => common);

  return (
    <div className="kd-no-header-horizontal">
      <div className="kd-d-block kd-d-lg-none kd-linebar kd-mr-xs-3">
        <i
          className="kd-icon-btn icon icon-menu"
          onClick={() => {
            dispatch(toggleCollapsedSideNav(!navCollapsed));
          }}
        />
      </div>
      <div className="kd-no-header-horizontal-top">
        <div className="kd-no-header-horizontal-top-center">
          <i className="icon icon-alert kd-mr-3" />
          <p className="kd-mb-0 kd-text-truncate">
            <IntlMessages id="app.announced" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoHeaderNotification;
