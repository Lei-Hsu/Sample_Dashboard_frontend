import React, { useState } from 'react';

import { Button, Checkbox, Input } from 'antd';
import Cookies from 'js-cookie';

import { useAppDispatch } from '@Hooks/hooks';

import { login } from '@Redux/slices/account/accountSlice';
import style from '@Style/components/account/login.module.scss';

const TEXT = {
  companyName: 'ES Style Company',
};

const Login = () => {
  const dispatch = useAppDispatch();

  const tempAccount = Cookies.get('account');
  const tempPassword = Cookies.get('password');
  const tempRemember = Cookies.get('isRemember') === 'true';

  const [isRemember, setIsRemember] = useState<boolean>(tempRemember);
  const [email, setEmail] = useState<string>(tempAccount);
  const [password, setPassword] = useState<string>(tempPassword);

  const handleSubmit = () => {
    dispatch(
      login({
        email,
        password,
        isRemember,
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
              defaultValue={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 space-y-2">
            <p>
              Password<span className="text-red-200">*</span>
            </p>
            <Input
              type="password"
              autoComplete="new-password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="space-x-2">
              <Checkbox
                defaultChecked={isRemember}
                onChange={(e) => setIsRemember(e.target.checked)}
              />
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
