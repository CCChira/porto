import React from 'react';

type Props = {
  children: JSX.Element;
};

const Form: React.FC<Props> = ({ children }) => {
  return <form className="w-full max-w-lg">{children}</form>;
};

export default Form;
