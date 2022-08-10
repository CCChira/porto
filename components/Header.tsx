import React from 'react';
import Link from 'next/link';
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
type Props = {
  children?: JSX.Element;
  modifiers: string;
};

const Header: React.FC<Props> = ({ children, modifiers }) => {
  const headerClass = `sticky w-full h-12 flex ${modifiers}`;
  return (
    <div className={headerClass}>
      <div className="flex items-center w-full space-between">
        <Link href="/">
          <div className="flex ml-5 cursor-pointer hover:animate-bouncer-infinite">
            <Image src={OrangeSlice} height="40" width="40" />
            <h1 className="self-center text-3xl">Porto</h1>
          </div>
        </Link>
        {children}
        <div className="ml-auto mr-12">
          <FontAwesomeIcon
            icon={faBars}
            className="transition duration-300 ease-in-out text-primary hover:text-primary-light"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
