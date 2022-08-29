import React, { useState, useEffect } from 'react'; //react stuff
import Image from 'next/image'; //nextJS stuff

import OrangeSlice from '../assets/orange-svgrepo-com.svg'; //constants, assets and types
import LoginForm from '../components/molecules/LoginForm';
import { useSelector } from 'react-redux';
import { selectUserEmail, selectUserName } from '../store/slices/userSlice';
export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className="flex flex-col items-center justify-center w-1/2 bg-white">
          <div className="flex items-center justify-center w-full mb-10 h-fit">
            <Image src={OrangeSlice} />
            <h1 className="self-center mt-10 mr-5 text-7xl">Porto</h1>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2 h-full bg-primary-highlight">
          {userName && userEmail ? null : <LoginForm path="hub" />}
        </div>
      </div>
    </>
  );
}
