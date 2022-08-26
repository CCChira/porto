//create nextjs page component with typescript
import * as React from 'react';
import { NextPage } from 'next';
import { useState } from 'react';
export interface Props {}

const login: NextPage<Props> = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const handleLogin = (e: Event) => {
    e.preventDefault();
    console.log(data);
  };
  return <div className="w-screen h-screen"></div>;
};

export default login;
