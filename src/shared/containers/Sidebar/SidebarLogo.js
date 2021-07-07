import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE,
} from '@kongd/constants';
import { onNavStyleChange, toggleCollapsedSideNav } from '@kongd/redux/actions';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SidebarLogo = () => {
  const dispatch = useDispatch();
  const { width, themeType } = useSelector(({ settings }) => settings);
  const { navCollapsed } = useSelector(({ common }) => common);
  let navStyle = useSelector(({ settings }) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
    <div className="kd-layout-sider-header">
      {navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR ? (
        <div className="kd-linebar">
          <i
            className={`kd-icon-btn icon icon-${
              navStyle === NAV_STYLE_MINI_SIDEBAR ? 'menu-unfold' : 'menu-fold'
            } ${themeType !== THEME_TYPE_LITE ? 'kd-text-white' : ''}`}
            onClick={() => {
              if (navStyle === NAV_STYLE_DRAWER) {
                dispatch(toggleCollapsedSideNav(!navCollapsed));
              } else if (navStyle === NAV_STYLE_FIXED) {
                dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR));
              } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
                dispatch(toggleCollapsedSideNav(!navCollapsed));
              } else {
                dispatch(onNavStyleChange(NAV_STYLE_FIXED));
              }
            }}
          />
        </div>
      ) : null}

      <Link to="/" className="kd-site-logo">
        {navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && width >= TAB_SIZE ? (
          <img alt="" src={require('@kongd/assets/images/w-logo.png')} />
        ) : themeType === THEME_TYPE_LITE ? (
          <img alt="" src={require('@kongd/assets/images/logo-white.png')} />
        ) : (
          <img alt="" src={require('@kongd/assets/images/logo.png')} />
        )}

        <span className="site-name">Kongd React</span>
      </Link>
    </div>
  );
};

export default SidebarLogo;
