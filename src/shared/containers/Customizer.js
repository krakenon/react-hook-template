import Auxiliary from '@kongd/components/Auxiliary';
import CustomScrollbars from '@kongd/components/CustomScrollbars';
import {
  BLUE,
  BLUE_DARK_TEXT_COLOR,
  BLUE_SEC,
  DARK_BLUE,
  DARK_BLUE_DARK_TEXT_COLOR,
  DARK_BLUE_SEC,
  DEEP_ORANGE,
  DEEP_ORANGE_DARK_TEXT_COLOR,
  DEEP_ORANGE_SEC,
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  LIGHT_BLUE,
  LIGHT_BLUE_DARK_TEXT_COLOR,
  LIGHT_BLUE_SEC,
  LIGHT_PURPLE,
  LIGHT_PURPLE_1,
  LIGHT_PURPLE_1_DARK_TEXT_COLOR,
  LIGHT_PURPLE_1_SEC,
  LIGHT_PURPLE_2,
  LIGHT_PURPLE_2_DARK_TEXT_COLOR,
  LIGHT_PURPLE_2_SEC,
  LIGHT_PURPLE_DARK_TEXT_COLOR,
  LIGHT_PURPLE_SEC,
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
  ORANGE,
  ORANGE_DARK_TEXT_COLOR,
  ORANGE_SEC,
  RED,
  RED_DARK_TEXT_COLOR,
  RED_SEC,
  THEME_TYPE_DARK,
  THEME_TYPE_LITE,
  THEME_TYPE_SEMI_DARK,
} from '@kongd/constants';
import {
  onLayoutTypeChange,
  setThemeColor,
  setThemeType,
} from '@kongd/redux/actions';
import { Button, Drawer, Form, Radio } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CustomizerSystem = () => {
  const [isCustomizerOpened, setIsCustomizerOpened] = useState(false);
  const dispatch = useDispatch();

  const themeType = useSelector(({ settings }) => settings.themeType);
  const themeColor = useSelector(({ settings }) => settings.themeColor);
  const navStyle = useSelector(({ settings }) => settings.navStyle);
  const layoutType = useSelector(({ settings }) => settings.layoutType);

  const handleColorChange = (filename) => {
    let link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.className = 'kd-style';
    link.href = `/css/${filename}.css`;
    setTimeout(() => {
      const children = document.getElementsByClassName('kd-style');
      if (children.length > 1) {
        for (let index = 0; index < children.length; index++) {
          if (index + 1 < children.length) {
            const child = children[index];
            child.parentNode.removeChild(child);
          }
        }
      }
    }, 10000);
    document.body.appendChild(link);
    dispatch(setThemeColor(filename));
  };

  const toggleCustomizer = () => {
    setIsCustomizerOpened((previousState) => ({
      isCustomizerOpened: !previousState.isCustomizerOpened,
    }));
  };

  const onThemeTypeChange = (e) => {
    dispatch(setThemeType(e.target.value));
  };

  const onNavStyleChange = (navStyle) => {
    dispatch(onNavStyleChange(navStyle));
  };

  const getCustomizerContent = () => {
    if (themeType === THEME_TYPE_DARK) {
      document.body.classList.add('dark-theme');
      let link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/css/dark_theme.css';
      link.className = 'style_dark_theme';
      document.body.appendChild(link);
    } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      const children = document.getElementsByClassName('style_dark_theme');
      if (children.length > 1) {
        for (let index = 0; index < children.length; index++) {
          if (index < children.length) {
            const child = children[index];
            child.parentNode.removeChild(child);
          }
        }
      }
    }

    return (
      <CustomScrollbars className="kd-customizer">
        <div className="kd-customizer-item">
          <h6 className="kd-mb-3 kd-text-uppercase">Theme</h6>
          <Radio.Group value={themeType} onChange={onThemeTypeChange}>
            <Radio.Button value={THEME_TYPE_LITE}>Lite</Radio.Button>
            <Radio.Button value={THEME_TYPE_SEMI_DARK}>Semi Dark</Radio.Button>
            <Radio.Button value={THEME_TYPE_DARK}>Dark</Radio.Button>
          </Radio.Group>
        </div>
        <div className="kd-customizer-item">{getPresetColors(themeColor)}</div>

        <h6 className="kd-mb-3 kd-text-uppercase">Nav Style</h6>

        {getNavStyles(navStyle)}

        <h6 className="kd-mb-3 kd-text-uppercase">Layout</h6>

        {getLayoutsTypes(layoutType)}
      </CustomScrollbars>
    );
  };

  const handleThemeColor = (fileName) => {
    handleColorChange(fileName);
  };

  const handleLayoutTypes = (layoutType) => {
    dispatch(onLayoutTypeChange(layoutType));
  };

  const getPresetColors = (themeColor) => {
    return (
      <ul className="kd-color-option kd-list-inline">
        <li>
          <span
            onClick={() => handleThemeColor('light_purple')}
            style={{
              backgroundColor: LIGHT_PURPLE_SEC,
              color: LIGHT_PURPLE_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-light-purple ${
              themeColor === LIGHT_PURPLE && 'active'
            }`}
          />
        </li>
        <li>
          <span
            onClick={() => handleThemeColor('red')}
            style={{ backgroundColor: RED_SEC, color: RED_DARK_TEXT_COLOR }}
            className={`kd-link kd-color-red ${themeColor === RED && 'active'}`}
          />
        </li>
        <li>
          <span
            onClick={() => handleThemeColor('blue')}
            style={{ backgroundColor: BLUE_SEC, color: BLUE_DARK_TEXT_COLOR }}
            className={`kd-link kd-color-blue ${
              themeColor === BLUE && 'active'
            }`}
          />
        </li>
        <li>
          <span
            onClick={() => handleThemeColor('dark_blue')}
            style={{
              backgroundColor: DARK_BLUE_SEC,
              color: DARK_BLUE_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-dark-blue ${
              themeColor === DARK_BLUE && 'active'
            }`}
          />
        </li>

        <li>
          <span
            onClick={() => handleThemeColor('orange')}
            style={{
              backgroundColor: ORANGE_SEC,
              color: ORANGE_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-orange ${
              themeColor === ORANGE && 'active'
            }`}
          />
        </li>

        <li>
          <span
            onClick={() => handleThemeColor('light_blue')}
            style={{
              backgroundColor: LIGHT_BLUE_SEC,
              color: LIGHT_BLUE_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-light-blue ${
              themeColor === LIGHT_BLUE && 'active'
            }`}
          />
        </li>

        <li>
          <span
            onClick={() => handleThemeColor('deep_orange')}
            style={{
              backgroundColor: DEEP_ORANGE_SEC,
              color: DEEP_ORANGE_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-deep-orange ${
              themeColor === DEEP_ORANGE && 'active'
            }`}
          />
        </li>

        <li>
          <span
            onClick={() => handleThemeColor('light_purple_1')}
            style={{
              backgroundColor: LIGHT_PURPLE_1_SEC,
              color: LIGHT_PURPLE_1_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-light-purple1 ${
              themeColor === LIGHT_PURPLE_1 && 'active'
            }`}
          />
        </li>

        <li>
          <span
            onClick={() => handleThemeColor('light_purple_2')}
            style={{
              backgroundColor: LIGHT_PURPLE_2_SEC,
              color: LIGHT_PURPLE_2_DARK_TEXT_COLOR,
            }}
            className={`kd-link kd-color-light-purple2 ${
              themeColor === LIGHT_PURPLE_2 && 'active'
            }`}
          />
        </li>
      </ul>
    );
  };

  const getLayoutsTypes = (layoutType) => {
    return (
      <ul className="kd-layout-option kd-list-inline">
        <li>
          <span
            onClick={() => handleLayoutTypes(LAYOUT_TYPE_FRAMED)}
            className={`kd-pointer ${
              layoutType === LAYOUT_TYPE_FRAMED && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/framed.png')}
              alt="framed"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => handleLayoutTypes(LAYOUT_TYPE_FULL)}
            className={`kd-pointer ${
              layoutType === LAYOUT_TYPE_FULL && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/full width.png')}
              alt="full width"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => handleLayoutTypes(LAYOUT_TYPE_BOXED)}
            className={`kd-pointer ${
              layoutType === LAYOUT_TYPE_BOXED && 'active'
            }`}
          >
            <img src={require('assets/images/layouts/boxed.png')} alt="boxed" />
          </span>
        </li>
      </ul>
    );
  };

  const getNavStyles = (navStyle) => {
    return (
      <ul className="kd-nav-option kd-list-inline">
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_FIXED)}
            className={`kd-pointer ${navStyle === NAV_STYLE_FIXED && 'active'}`}
          >
            <img src={require('assets/images/layouts/fixed.png')} alt="fixed" />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_MINI_SIDEBAR)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_MINI_SIDEBAR && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/mini sidebar.png')}
              alt="mini sidebar"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_DRAWER)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_DRAWER && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/drawer nav.png')}
              alt="drawer nav"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_NO_HEADER_MINI_SIDEBAR)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/no header mini sidebar.png')}
              alt="no hader mini sidebar"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() =>
              onNavStyleChange(NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR)
            }
            className={`kd-pointer ${
              navStyle === NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/vertical no header.png')}
              alt="vertical no header"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_DEFAULT_HORIZONTAL)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_DEFAULT_HORIZONTAL && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/default horizontal.png')}
              alt="default horizontal"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_DARK_HORIZONTAL)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_DARK_HORIZONTAL && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/dark horizontal.png')}
              alt="dark horizontal"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_INSIDE_HEADER_HORIZONTAL)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/inside header horizontal.png')}
              alt="inside header horizontal"
            />
          </span>
        </li>
        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_BELOW_HEADER)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_BELOW_HEADER && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/below header.png')}
              alt="below header"
            />
          </span>
        </li>

        <li>
          <span
            onClick={() => onNavStyleChange(NAV_STYLE_ABOVE_HEADER)}
            className={`kd-pointer ${
              navStyle === NAV_STYLE_ABOVE_HEADER && 'active'
            }`}
          >
            <img
              src={require('assets/images/layouts/top to header.png')}
              alt="top to header"
            />
          </span>
        </li>
      </ul>
    );
  };

  return (
    <Auxiliary>
      <Drawer
        placement="right"
        closable={false}
        onClose={toggleCustomizer}
        visible={isCustomizerOpened}
      >
        {getCustomizerContent()}
      </Drawer>
      <div className="kd-customizer-option">
        <Button type="primary" onClick={toggleCustomizer}>
          <i className="icon icon-setting fxicon-hc-spin kd-d-block" />
        </Button>
      </div>
    </Auxiliary>
  );
};

const Customizer = Form.create()(CustomizerSystem);

export default Customizer;
