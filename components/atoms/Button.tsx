import React from 'react';
import Link from 'next/link';

type Props = {
  type: string;
  modifiers: string;
  children: JSX.Element | string;
  link?: string;
};
const handleTypeChooser = (type: string) => {
  switch (type) {
    case 'primary':
      return 'bg-primary hover:bg-primary-light text-orange-50 font-bold';
    case 'secondary':
      return 'bg-secondary hover:bg-secondary-2 text-white font-bold';
    case 'alternate':
      return 'bg-white hover:bg-primary text-primary hover:text-white font-bold';
    default:
      return 'bg-black text-white font-bold py-2 px-4 rounded';
  }
};
const Button: React.FC<Props> = ({ type, modifiers, children, link }) => {
  const finalButtonClass: string = `px-4 py-2 rounded-full font-bold text-sm transition ease-in-out duration-300 ${handleTypeChooser(
    type
  )} ${modifiers}`;
  return link ? (
    <Link href={link}>
      <div
        className={`${finalButtonClass} flex cursor-pointer items-center justify-center`}
      >
        {children}
      </div>
    </Link>
  ) : (
    <button className={finalButtonClass}>{children}</button>
  );
};

export default Button;
