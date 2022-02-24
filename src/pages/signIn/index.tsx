import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

import { useAppDispatch } from '@Hooks/hooks';

import { setSignIn } from '@Redux/slices/account/accountSlice';
import style from '@Style/components/account/signIn.module.scss';

interface AccountInfoType {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignIn = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  const [accountInfo, setAccountInfo] = useState<AccountInfoType>();

  const handleInput = (inputType: string, value: string) => {
    setAccountInfo({
      ...accountInfo,
      [inputType]: value,
    });
  };

  const handleSubmit = () => {
    const value = form.getFieldsValue();
    const signInValue = {
      email: value.email,
      password: value.password,
    };
    dispatch(setSignIn(signInValue));
  };

  return (
    <div className="h-screen w-screen">
      <section className="flex h-full w-full flex-col items-center justify-center">
        <Form
          className="h-[400px] min-w-[350px] max-w-[500px]"
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
        >
          <div className="mb-5">
            <h2 className="text-2xl font-bold">Register Account</h2>
          </div>
          <div className=" space-y-2">
            <Form.Item
              name="email"
              label="Email"
              required
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, type: 'email' }]}
            >
              <Input
                className={style['ant-input']}
                placeholder="Enter email"
                onChange={(e) => handleInput('email', e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="">
            <Form.Item
              name="password"
              label="Password"
              required
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true },
                () => ({
                  validator(_, value) {
                    if (
                      value.match(/^(?=.*[0-9])(?=.*[a-z])([a-zA-Z0-9]{8,})$/)
                    ) {
                      return Promise.resolve();
                    } else {
                      return Promise.reject(
                        new Error(
                          'The password must be has more than 8 characters',
                        ),
                      );
                    }
                  },
                }),
              ]}
            >
              <Input
                className={style['ant-input']}
                type="password"
                placeholder="Enter Password"
                onChange={(e) => handleInput('email', e.target.value)}
              />
            </Form.Item>
          </div>
          <div className="">
            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              required
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        'The two passwords that you entered do not match!',
                      ),
                    );
                  },
                }),
              ]}
            >
              <Input
                className={style['ant-input']}
                type="password"
                placeholder="Enter Confirm Password"
                onChange={(e) => handleInput('email', e.target.value)}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Button className={style['ant-btn']} htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  );
};

export default SignIn;
