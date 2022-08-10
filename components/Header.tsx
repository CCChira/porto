import React from 'react';

type Props = {
  children: JSX.Element;
  modifiers: string;
};

const Header: React.FC<Props> = ({ children, modifiers }) => {
  const headerClass = `sticky w-full h-12 flex ${modifiers}`;
  return <div className={headerClass}>{children}</div>;
};

export default Header;
