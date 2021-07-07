import {
  FacebookOutlined,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import CircularProgress from '@kongd/components/CircularProgress';
import IntlMessages from '@kongd/components/IntlMessages';
import {
  hideMessage,
  showAuthLoader,
  userFacebookSignIn,
  userGithubSignIn,
  userGoogleSignIn,
  userSignInSuccess,
  userTwitterSignIn,
} from '@kongd/redux/actions';
import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  const dispatch = useDispatch();
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );
  const history = useHistory();

  useEffect(() => {
    console.log(authUser);

    if (showMessage) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 100);
    }
    if (authUser !== null) {
      history.push('/');
    }
  });

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onFinish = (values) => {
    console.log('finish', values);
    dispatch(showAuthLoader());
    dispatch(userSignInSuccess(values));
  };

  return (
    <div className="kd-app-login-wrap">
      <div className="kd-app-login-container">
        <div className="kd-app-login-main-content">
          <div className="kd-app-logo-content">
            <div className="kd-app-logo-content-bg">
              <img src={'https://via.placeholder.com/272x395'} alt="Neature" />
            </div>
            <div className="kd-app-logo-wid">
              <h1>
                <IntlMessages id="app.userAuth.signIn" />
              </h1>
              <p>
                <IntlMessages id="app.userAuth.bySigning" />
              </p>
              <p>
                <IntlMessages id="app.userAuth.getAccount" />
              </p>
            </div>
            <div className="kd-app-logo">
              <img
                alt="example"
                src={require('@kongd/assets/images/logo.png')}
              />
            </div>
          </div>
          <div className="kd-app-login-content">
            <Form
              initialValues={{ remember: true }}
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="kd-signin-form kd-form-row0"
            >
              <Form.Item
                initialValue="demo@example.com"
                rules={[
                  { required: true, message: 'The input is not valid E-mail!' },
                ]}
                name="email"
              >
                <Input placeholder="Email" />
              </Form.Item>
              <Form.Item
                initialValue="demo#123"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
                name="password"
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Checkbox>
                  <IntlMessages id="appModule.iAccept" />
                </Checkbox>
                <span className="kd-signup-form-forgot kd-link">
                  <IntlMessages id="appModule.termAndCondition" />
                </span>
              </Form.Item>
              <Form.Item>
                <Button type="primary" className="kd-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signIn" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />
                </span>{' '}
                <Link to="/signup">
                  <IntlMessages id="app.userAuth.signUp" />
                </Link>
              </Form.Item>
              <div className="kd-flex-row kd-justify-content-between">
                <span>or connect with</span>
                <ul className="kd-social-link">
                  <li>
                    <GoogleOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userGoogleSignIn());
                      }}
                    />
                  </li>
                  <li>
                    <FacebookOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userFacebookSignIn());
                      }}
                    />
                  </li>
                  <li>
                    <GithubOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userGithubSignIn());
                      }}
                    />
                  </li>
                  <li>
                    <TwitterOutlined
                      onClick={() => {
                        dispatch(showAuthLoader());
                        dispatch(userTwitterSignIn());
                      }}
                    />
                  </li>
                </ul>
              </div>
              <span className="kd-text-light kd-fs-sm">
                {' '}
                demo user email: 'demo@example.com' and password: 'demo#123'
              </span>
            </Form>
          </div>

          {loader ? (
            <div className="kd-loader-view">
              <CircularProgress />
            </div>
          ) : null}
          {showMessage ? message.error(alertMessage.toString()) : null}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
