import { DownOutlined } from '@ant-design/icons';
import AppNotification from '@kongd/components/AppNotification';
import CustomScrollbars from '@kongd/components/CustomScrollbars';
import IntlMessages from '@kongd/components/IntlMessages';
import MailNotification from '@kongd/components/MailNotification';
import SearchBox from '@kongd/components/SearchBox';
import UserInfo from '@kongd/components/UserInfo';
import { switchLanguage, toggleCollapsedSideNav } from '@kongd/redux/actions';
import { Button, Dropdown, Layout, Menu, message, Popover } from 'antd';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HorizontalNav from '../HorizontalNav';
import languageData from '../languageData';

const { Header } = Layout;

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Products</Menu.Item>
    <Menu.Item key="2">Apps</Menu.Item>
    <Menu.Item key="3">Blogs</Menu.Item>
  </Menu>
);

function handleMenuClick(e) {
  message.info('Click on menu item.');
}

const InsideHeader = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const locale = useSelector(({ settings }) => settings.locale);
  const { navCollapsed } = useSelector(({ common }) => common);

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
    <div className="kd-header-horizontal kd-header-horizontal-dark kd-inside-header-horizontal">
      <div className="kd-header-horizontal-top">
        <div className="kd-container">
          <div className="kd-header-horizontal-top-flex">
            <div className="kd-header-horizontal-top-left">
              <i className="icon icon-alert kd-mr-3" />
              <p className="kd-mb-0 kd-text-truncate">
                <IntlMessages id="app.announced" />
              </p>
            </div>
            <ul className="kd-login-list">
              <li>Login</li>
              <li>Signup</li>
            </ul>
          </div>
        </div>
      </div>

      <Header className="kd-header-horizontal-main">
        <div className="kd-container">
          <div className="kd-header-horizontal-main-flex">
            <div className="kd-d-block kd-d-lg-none kd-linebar kd-mr-xs-3 6e">
              <i
                className="kd-icon-btn icon icon-menu"
                onClick={() => {
                  dispatch(toggleCollapsedSideNav(!navCollapsed));
                }}
              />
            </div>
            <Link
              to="/"
              className="kd-d-block kd-d-lg-none kd-pointer kd-mr-xs-3 kd-pt-xs-1 kd-w-logo"
            >
              <img alt="" src={require('@kongd/assets/images/w-logo.png')} />
            </Link>
            <Link
              to="/"
              className="kd-d-none kd-d-lg-block kd-pointer kd-mr-xs-5 kd-logo"
            >
              <img alt="" src={require('@kongd/assets/images/logo.png')} />
            </Link>

            <div className="kd-header-horizontal-nav kd-header-horizontal-nav-curve kd-d-none kd-d-lg-block">
              <HorizontalNav />
            </div>
            <ul className="kd-header-notifications kd-ml-auto">
              <li className="kd-notify kd-notify-search">
                <Popover
                  overlayClassName="kd-popover-horizantal"
                  placement="bottomRight"
                  content={
                    <div className="kd-d-flex">
                      <Dropdown overlay={menu}>
                        <Button>
                          Category <DownOutlined />
                        </Button>
                      </Dropdown>
                      <SearchBox
                        styleName="kd-popover-search-bar"
                        placeholder="Search in app..."
                        onChange={updateSearchChatUser}
                        value={searchText}
                      />
                    </div>
                  }
                  trigger="click"
                >
                  <span className="kd-pointer kd-d-block">
                    <i className="icon icon-search-new" />
                  </span>
                </Popover>
              </li>

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
              <li className="kd-language">
                <Popover
                  overlayClassName="kd-popover-horizantal"
                  placement="bottomRight"
                  content={languageMenu()}
                  trigger="click"
                >
                  <span className="kd-pointer kd-flex-row kd-align-items-center">
                    <i className={`flag flag-24 flag-${locale.icon}`} />
                  </span>
                </Popover>
              </li>
              <li className="kd-user-nav">
                <UserInfo />
              </li>
            </ul>
          </div>
        </div>
      </Header>
    </div>
  );
};

const mapStateToProps = ({ settings, common }) => {
  const { navCollapsed } = common;
  const { locale } = settings;
  return { locale, navCollapsed };
};
export default connect(mapStateToProps, {
  toggleCollapsedSideNav,
  switchLanguage,
})(InsideHeader);
