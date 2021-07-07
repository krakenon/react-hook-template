import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
} from '@kongd/constants';
import {
  toggleCollapsedSideNav,
  updateWindowWidth,
} from '@kongd/redux/actions';
import { Drawer, Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SidebarContent from './SidebarContent';

const { Sider } = Layout;

const Sidebar = () => {
  const dispatch = useDispatch();

  const { themeType, width, navStyle } = useSelector(
    ({ settings }) => settings
  );
  const { navCollapsed } = useSelector(({ common }) => common);

  const onToggleCollapsedNav = () => {
    dispatch(toggleCollapsedSideNav(!navCollapsed));
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      dispatch(updateWindowWidth(window.innerWidth));
    });
  }, [dispatch]);

  let drawerStyle = 'kd-collapsed-sidebar';

  if (navStyle === NAV_STYLE_FIXED) {
    drawerStyle = '';
  } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
    drawerStyle = 'kd-mini-sidebar kd-mini-custom-sidebar';
  } else if (navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) {
    drawerStyle = 'kd-custom-sidebar';
  } else if (navStyle === NAV_STYLE_MINI_SIDEBAR) {
    drawerStyle = 'kd-mini-sidebar';
  } else if (navStyle === NAV_STYLE_DRAWER) {
    drawerStyle = 'kd-collapsed-sidebar';
  }
  if (
    (navStyle === NAV_STYLE_FIXED ||
      navStyle === NAV_STYLE_MINI_SIDEBAR ||
      navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR) &&
    width < TAB_SIZE
  ) {
    drawerStyle = 'kd-collapsed-sidebar';
  }
  return (
    <Sider
      className={`kd-app-sidebar ${drawerStyle} ${
        themeType !== THEME_TYPE_LITE ? 'kd-layout-sider-dark' : null
      }`}
      trigger={null}
      collapsed={
        width < TAB_SIZE
          ? false
          : navStyle === NAV_STYLE_MINI_SIDEBAR ||
            navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR
      }
      theme={themeType === THEME_TYPE_LITE ? 'lite' : 'dark'}
      collapsible
    >
      {navStyle === NAV_STYLE_DRAWER || width < TAB_SIZE ? (
        <Drawer
          className={`kd-drawer-sidebar ${
            themeType !== THEME_TYPE_LITE ? 'kd-drawer-sidebar-dark' : null
          }`}
          placement="left"
          closable={false}
          onClose={onToggleCollapsedNav}
          visible={navCollapsed}
        >
          <SidebarContent />
        </Drawer>
      ) : (
        <SidebarContent />
      )}
    </Sider>
  );
};
export default Sidebar;
