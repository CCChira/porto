import React from 'react';

type Props = {
  reff: React.Ref<HTMLInputElement>;
  placeholder: string;
  modifiers: string;
  type: string;
};

const Input: React.FC<Props> = ({ reff, placeholder, modifiers, type }) => {
  return (
    <input
      ref={reff}
      type={type}
      placeholder={placeholder}
      className={`mx-5 my-2 w-full rounded-full border-2 border-transparent p-2 px-4 text-primary placeholder-primary shadow-md outline-none transition ease-in-out focus:border-primary  ${modifiers}`}
    />
  );
};

export default Input;
