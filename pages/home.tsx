//create nextjs page component with typescript
import * as React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Header from '../components/Header';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Link from 'next/link';
export interface Props {
}

const landingPage: NextPage<Props> = () => {
  return (
    <div className='h-screen w-screen bg-primary'>
        <Header modifiers = 'bg-white'>
            <div className = 'flex items-center space-between w-full'>
                <Link href='/'>
                    <div className = 'flex cursor-pointer motion-reduce:animate-bounce'>
                        <Image src = {OrangeSlice} height='40' width='40'/>
                        <h1 className='self-center text-3xl'>Porto</h1>
                    </div>
                </Link>
                <div className = 'ml-auto mr-12' >
                    <FontAwesomeIcon icon = {faBars} className='text-primary hover:text-primary-light transition ease-in-out duration-300'/>
                </div>
            </div>
        </Header>
    </div>
  );
}

export default landingPage;