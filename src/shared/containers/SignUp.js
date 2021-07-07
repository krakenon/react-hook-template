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
  userSignUp,
  userTwitterSignIn,
} from '@kongd/redux/actions';
import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

const FormItem = Form.Item;

const SignUp = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loader, alertMessage, showMessage, authUser } = useSelector(
    ({ auth }) => auth
  );

  useEffect(() => {
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
    dispatch(showAuthLoader());
    dispatch(userSignUp(values));
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
                <IntlMessages id="app.userAuth.signUp" />
              </h1>
              <p>
                <IntlMessages id="app.userAuth.bySigning" />
              </p>
              <p>
                <IntlMessages id="app.userAuth.getAccount" />
              </p>
            </div>
            <div className="kd-app-logo">
              <img alt="example" src={require('@kongd/assets/images/logo.png')} />
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
              <FormItem
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
                name="Username"
              >
                <Input placeholder="Username" />
              </FormItem>

              <FormItem
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </FormItem>
              <FormItem
                name="password"
                rules={[
                  { required: true, message: 'Please input your Password!' },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </FormItem>
              <FormItem name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
                <Link
                  className="kd-login-form-forgot"
                  to="/custom-views/user-auth/forgot-password"
                >
                  Forgot password
                </Link>
              </FormItem>
              <FormItem>
                <Button type="primary" className="kd-mb-0" htmlType="submit">
                  <IntlMessages id="app.userAuth.signUp" />
                </Button>
                <span>
                  <IntlMessages id="app.userAuth.or" />
                </span>{' '}
                <Link to="/signin">
                  <IntlMessages id="app.userAuth.signIn" />
                </Link>
              </FormItem>
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
            </Form>
          </div>
          {loader && (
            <div className="kd-loader-view">
              <CircularProgress />
            </div>
          )}
          {showMessage && message.error(alertMessage)}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
