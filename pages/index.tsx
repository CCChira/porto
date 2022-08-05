import Image from 'next/image'
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Button from '../components/atoms/Button';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }
      , 1250);
    return () => clearTimeout(timer);
  }
    , []);
  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center bg-white flex-col'>
        <div className='flex items-center justify-center flex h-fit w-full xl:animate-slide-in mb-10'>
          <Image src={OrangeSlice} />
          <h1 className='self-center text-8xl mt-10'>Porto</h1>
        </div>
        <div>
          {
            loaded ? 
              <Button type='primary' modifiers='w-80 h-16 xl:animate-fade-in' link='/home' >
                  <a>Continue</a>
              </Button> 
            :
             <div className='w-80 h-16'></div>
          }
        </div>
      </div>
    </>
  )
}
