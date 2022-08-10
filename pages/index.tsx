import React, { useState, useEffect } from 'react'; //react stuff
import Image from 'next/image'; //nextJS stuff

import Button from '../components/atoms/Button'; //MY components
import Header from '../components/Header';

import OrangeSlice from '../assets/orange-svgrepo-com.svg'; //constants, assets and types

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1250);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-white">
        <div className="flex items-center justify-center w-full mb-10 h-fit animate-slide-in-mobile xl:animate-slide-in">
          <Image src={OrangeSlice} />
          <h1 className="self-center mt-10 mr-5 text-7xl">Porto</h1>
        </div>
        <div>
          {loaded ? (
            <Button
              type="primary"
              modifiers="w-80 h-16 animate-fade-in"
              link="/hub"
            >
              <a>Continue</a>
            </Button>
          ) : (
            <div className="h-16 w-80"></div>
          )}
        </div>
      </div>
    </>
  );
}
