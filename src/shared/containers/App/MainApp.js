import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DARK_HORIZONTAL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
} from '@kongd/constants';
import { Layout } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import App from 'routes';

import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import AboveHeader from '../Topbar/AboveHeader';
import BelowHeader from '../Topbar/BelowHeader';
import HorizontalDark from '../Topbar/HorizontalDark';
import HorizontalDefault from '../Topbar/HorizontalDefault';
import InsideHeader from '../Topbar/InsideHeader';
import NoHeaderNotification from '../Topbar/NoHeaderNotification';

const { Content, Footer } = Layout;

const MainApp = () => {
  const { width, navStyle } = useSelector(({ settings }) => settings);
  const match = useRouteMatch();

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DARK_HORIZONTAL:
        return 'kd-container-wrap';
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return 'kd-container-wrap';
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return 'kd-container-wrap';
      case NAV_STYLE_BELOW_HEADER:
        return 'kd-container-wrap';
      case NAV_STYLE_ABOVE_HEADER:
        return 'kd-container-wrap';
      default:
        return '';
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return <HorizontalDefault />;
      case NAV_STYLE_DARK_HORIZONTAL:
        return <HorizontalDark />;
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return <InsideHeader />;
      case NAV_STYLE_ABOVE_HEADER:
        return <AboveHeader />;
      case NAV_STYLE_BELOW_HEADER:
        return <BelowHeader />;
      case NAV_STYLE_FIXED:
        return <Topbar />;
      case NAV_STYLE_DRAWER:
        return <Topbar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Topbar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <NoHeaderNotification />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <NoHeaderNotification />;
      default:
        return null;
    }
  };

  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar />;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED:
        return <Sidebar />;
      case NAV_STYLE_DRAWER:
        return <Sidebar />;
      case NAV_STYLE_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR:
        return <Sidebar />;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar />;
      default:
        return null;
    }
  };

  return (
    <Layout className="kd-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content
          className={`kd-layout-content ${getContainerClass(navStyle)} `}
        >
          <App match={match} />
          <Footer>
            <div className="kd-layout-footer-content">{'Kongd UI '}</div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainApp;
