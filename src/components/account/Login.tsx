import React, { useRef } from 'react';

import { Input, Checkbox, Button } from 'antd';

import { useAppDispatch } from '@Hooks/hooks';

import { login } from '@Redux/slices/account/accountSlice';

import style from '@Style/components/account/login.module.css';

const TEXT = {
  companyName: 'ES Style Company',
};

const Login = () => {
  const dispatch = useAppDispatch();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    dispatch(
      login({
        email: emailRef.current,
        password: passwordRef.current,
      }),
    );
  };

  return (
    <div className="h-screen w-screen">
      <section className="flex h-full w-full flex-col items-center justify-center">
        <div className="">
          <div className="mb-5">
            <h2 className="text-2xl font-bold">{`Welcome to ${TEXT.companyName} CMS`}</h2>
          </div>
          <div className="mb-4 space-y-2">
            <p>
              Email<span className="text-red-200">*</span>
            </p>
            <Input
              ref={emailRef}
              placeholder="Enter email"
              onChange={(e) => (emailRef.current = e.target.value)}
            />
          </div>
          <div className="mb-4 space-y-2">
            <p>
              Password<span className="text-red-200">*</span>
            </p>
            <Input
              ref={passwordRef}
              type="password"
              placeholder="Enter password"
              onChange={(e) => (passwordRef.current = e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="space-x-2">
              <Checkbox />
              <span>Remember me</span>
            </div>
            <div className="font-sans text-blue-500">Forget password</div>
          </div>
          <div>
            <Button className={style['ant-btn']} onClick={handleSubmit}>
              Login
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
