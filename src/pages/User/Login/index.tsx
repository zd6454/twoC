import Footer from '@/components/Footer';
import { login,register } from '@/services/ant-design-pro/api';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  ProFormSelect
} from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { FormattedMessage, history, SelectLang, useIntl, useModel, Helmet } from '@umijs/max';
import { Alert, message, Tabs, Carousel, Image  } from 'antd';
import Settings from '../../../../config/defaultSettings';
import React, { useState, useRef } from 'react';
import {Button} from 'antd'
import { flushSync } from 'react-dom';
// 缓存导入
import token from  '../../../utils/currentToken';
import Zmgbg from '../../Asserts/bg.png';
import Zmg1 from '../../Asserts/1.png';
import Zmg2 from '../../Asserts/2.png';

const ActionIcons = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      marginLeft: '8px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
      transition: 'color 0.3s',
      '&:hover': {
        color: token.colorPrimaryActive,
      },
    };
  });

  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={langClassName} />
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={langClassName} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={langClassName} />
    </>
  );
};

const Lang = () => {
  const langClassName = useEmotionCss(({ token }) => {
    return {
      width: 42,
      height: 42,
      lineHeight: '42px',
      position: 'fixed',
      right: 16,
      borderRadius: token.borderRadius,
      ':hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={langClassName} data-lang>
      {SelectLang && <SelectLang />}
    </div>
  );
};

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const formRef = useRef()
  const containerClassName = useEmotionCss(() => {
    return {
      marginRight:100,
      float:'right',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const intl = useIntl();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    if(type=='account'){
      try {
      // 登录
      const msg = await login({ ...values, type });
      if (msg.code === 200) {

        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        token.setStore('name',values?.name)
        token.setStore('telephone',values?.telephone)
        token.setStore('type',msg.type)
        message.success(defaultLoginSuccessMessage);
        await fetchUserInfo();
        const urlParams = new URL(window.location.href).searchParams;
        history.push(urlParams.get('redirect') || '/');
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
       } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      console.log(error);
      message.error(defaultLoginFailureMessage);
       }
    }else{
      try {
        // 注册
        const msg = await register({ ...values });
        if (msg.code === 200) {
          message.success('注册成功');
          setType('account')
          return;
        }else{
          message.success(msg.message)
        }
         } catch (error) {
            // message.error('注册失败');
         }
    }


  };
  const { status, type: loginType } = userLoginState;

  const buttonText ={'account':'登录','mobile':'注册'}
  return (
    <div style={{position:'relative',overflow:'hidden'}}>
     <div style={{display:'flex',justifyContent:'space-around'}}>
     {/* <Image  style={{width:'100vw',height:'100vh',position:'absolute',top:0,left:-41}}  preview={false} src={Zmgbg} /> */}
      <div style={{padding:'56px 0',marginTop:20}}>
         <Carousel autoplay style={{width:800,display:'block'}}>
          <div>
           <Image  preview={false} width={800} src={Zmg1}> </Image>
          </div>
          <div>
           <Image  preview={false} width={800} src={Zmg2}> </Image>
          </div>
       </Carousel>
      </div>
     
      <div className={containerClassName}>
        <Helmet>
        <title>
          {intl.formatMessage({
            id: 'menu.login',
            defaultMessage: '登录页',
          })}
          - {Settings.title}
        </title>
      </Helmet>
      {/* <Lang /> */}
      <div
        style={{
          flex: '1',
          padding: '32px 0',
        }}
      >
        <LoginForm
          contentStyle={{
            minWidth: 280,
            maxWidth: '75vw',
          }}
          formRef={formRef}
          logo={<img alt="logo" src="/logo.svg" />}
          title="金融科技"
          subTitle={intl.formatMessage({ id: 'pages.layouts.userLayout.title' })}
          initialValues={{
            autoLogin: true,
          }}
          actions={[]}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
          submitter={false}
        >
          <Tabs
            activeKey={type}
            onChange={setType}
            centered
            items={[
              {
                key: 'account',
                label: intl.formatMessage({
                  id: 'pages.login.accountLogin.tab',
                  defaultMessage: '账户密码登录',
                }),
              },
              {
                key: 'mobile',
                label: '注册',
              },
            ]}
          />

          {status === 'error' && loginType === 'account' && (
            <LoginMessage
              content={intl.formatMessage({
                id: 'pages.login.accountLogin.errorMessage',
                defaultMessage: '账户或密码错误(admin/ant.design)',
              })}
            />
          )}
          {type === 'account' && (
            <>
              <ProFormText
                name="name"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.username.placeholder',
                  defaultMessage: '用户名: admin or user',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.username.required"
                        defaultMessage="请输入用户名!"
                      />
                    ),
                  },
                ]}
              />
               <ProFormText
                name="telephone"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'请输入手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={intl.formatMessage({
                  id: 'pages.login.password.placeholder',
                  defaultMessage: '密码: ant.design',
                })}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />

            <ProFormText.Password
                name="platformPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'请输入二级密码'}
                rules={[
                  {
                    required: true,
                    message: (
                      <FormattedMessage
                        id="pages.login.password.required"
                        defaultMessage="请输入密码！"
                      />
                    ),
                  },
                ]}
              />
              <Button type='primary' size='large' style={{width:'100%'}} onClick={()=>formRef.current.submit()}>登录</Button>
            </>
          )}

          {status === 'error' && loginType === 'mobile' && <LoginMessage content="验证码错误" />}
          {type === 'mobile' &&
            <>
            <ProFormSelect 
              name="type"
              placeholder={'请选择账号类型'}
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              rules={[
                {
                  required: true,
                  message: '请选择账号类型',
                },
              ]}
              options={[
                {label:'管理员',value:'admin'},
                {label:'公司A',value:'companya'},
                {label:'公司B',value:'companyb'},
                {label:'公司C',value:'companyc'},
                {label:'审计',value:'aduit'},
                {label:'政府',value:'government'},
                {label:'金额机构',value:'finance'},
                {label:'银行1',value:'bank1'},
                {label:'银行2',value:'bank2'},
                {label:'银行3',value:'bank3'},
                {label:'作者1',value:'author1'},
                {label:'作者2',value:'author2'},
                {label:'作者3',value:'author3'},
              ]}
            />
            <ProFormText
              name="name"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.username.placeholder',
                defaultMessage: '用户名: admin or user',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.username.required"
                      defaultMessage="请输入用户名!"
                    />
                  ),
                },
              ]}
            />
             <ProFormText
              name="telephone"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined />,
              }}
              placeholder={'请输入手机号'}
              rules={[
                {
                  required: true,
                  message: '请输入手机号',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码: ant.design',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />

          <ProFormText
              name="typePassword"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined />,
              }}
              placeholder={'请输入权限凭证'}
              rules={[
                {
                  required: true,
                  message: '请输入权限凭证'
                },
              ]}
            />
                <Button type='primary' size='large' style={{width:'100%'}} onClick={()=>formRef.current.submit()}>注册</Button>
          </>

          }
          {type !== 'mobile' &&
            <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
          }
          
        </LoginForm>
      </div>
      </div>
      
      {/* <Footer /> */}
    </div>
    </div>
  );
};

export default Login;
