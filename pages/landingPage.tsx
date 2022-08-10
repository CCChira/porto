//create nextjs page component with typescript
import * as React from 'react';
import Image from 'next/image';
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import { NextPage } from 'next';
export interface Props {}

const landingPage: NextPage<Props> = () => {
  return (
    <div className="h-screen w-screen">
      <Image src={OrangeSlice} />
    </div>
  );
};

export default landingPage;
