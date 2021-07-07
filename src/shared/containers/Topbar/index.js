import AppNotification from '@kongd/components/AppNotification';
import Auxiliary from '@kongd/components/Auxiliary';
import CustomScrollbars from '@kongd/components/CustomScrollbars';
import MailNotification from '@kongd/components/MailNotification';
import SearchBox from '@kongd/components/SearchBox';
import UserInfo from '@kongd/components/UserInfo';
import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  TAB_SIZE,
} from '@kongd/constants';
import { switchLanguage, toggleCollapsedSideNav } from '@kongd/redux/actions';
import { Layout, Popover } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import languageData from './languageData';

const { Header } = Layout;

const Topbar = () => {
  const { locale, width, navStyle } = useSelector(({ settings }) => settings);
  const { navCollapsed } = useSelector(({ common }) => common);
  const { searchText, setSearchText } = useState('');
  const dispatch = useDispatch();

  const languageMenu = () => (
    <CustomScrollbars className="kd-popover-lang-scroll">
      <ul className="kd-sub-popover">
        {languageData.map((language) => (
          <li
            className="kd-media kd-pointer"
            key={JSON.stringify(language)}
            onClick={(e) => dispatch(switchLanguage(language))}
          >
            <i className={`flag flag-24 kd-mr-2 flag-${language.icon}`} />
            <span className="kd-language-text">{language.name}</span>
          </li>
        ))}
      </ul>
    </CustomScrollbars>
  );

  const updateSearchChatUser = (evt) => {
    setSearchText(evt.target.value);
  };
  return (
    <Header>
      {navStyle === NAV_STYLE_DRAWER ||
      ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) &&
        width < TAB_SIZE) ? (
        <div className="kd-linebar kd-mr-3">
          <i
            className="kd-icon-btn icon icon-menu"
            onClick={() => {
              dispatch(toggleCollapsedSideNav(!navCollapsed));
            }}
          />
        </div>
      ) : null}
      <Link to="/" className="kd-d-block kd-d-lg-none kd-pointer">
        <img alt="" src={require('@kongd/assets/images/w-logo.png')} />
      </Link>

      <SearchBox
        styleName="kd-d-none kd-d-lg-block kd-lt-icon-search-bar-lg"
        placeholder="Search in app..."
        onChange={updateSearchChatUser}
        value={searchText}
      />
      <ul className="kd-header-notifications kd-ml-auto">
        <li className="kd-notify kd-notify-search kd-d-inline-block kd-d-lg-none">
          <Popover
            overlayClassName="kd-popover-horizantal"
            placement="bottomRight"
            content={
              <SearchBox
                styleName="kd-popover-search-bar"
                placeholder="Search in app..."
                onChange={updateSearchChatUser}
                value={searchText}
              />
            }
            trigger="click"
          >
            <span className="kd-pointer kd-d-block">
              <i className="icon icon-search-new" />
            </span>
          </Popover>
        </li>
        {width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="kd-notify">
              <Popover
                overlayClassName="kd-popover-horizantal"
                placement="bottomRight"
                content={<AppNotification />}
                trigger="click"
              >
                <span className="kd-pointer kd-d-block">
                  <i className="icon icon-notification" />
                </span>
              </Popover>
            </li>

            <li className="kd-msg">
              <Popover
                overlayClassName="kd-popover-horizantal"
                placement="bottomRight"
                content={<MailNotification />}
                trigger="click"
              >
                <span className="kd-pointer kd-status-pos kd-d-block">
                  <i className="icon icon-chat-new" />
                  <span className="kd-status kd-status-rtl kd-small kd-orange" />
                </span>
              </Popover>
            </li>
          </Auxiliary>
        )}
        <li className="kd-language">
          <Popover
            overlayClassName="kd-popover-horizantal"
            placement="bottomRight"
            content={languageMenu()}
            trigger="click"
          >
            <span className="kd-pointer kd-flex-row kd-align-items-center">
              <i className={`flag flag-24 flag-${locale.icon}`} />
              <span className="kd-pl-2 kd-language-name">{locale.name}</span>
              <i className="icon icon-chevron-down kd-pl-2" />
            </span>
          </Popover>
        </li>
        {width >= TAB_SIZE ? null : (
          <Auxiliary>
            <li className="kd-user-nav">
              <UserInfo />
            </li>
          </Auxiliary>
        )}
      </ul>
    </Header>
  );
};

export default Topbar;
