import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';

type Props = {
  children: string;
  letterPressed: string;
  setLetterPressed: Function;
};
const WordleButton: React.FC<Props> = ({
  children,
  letterPressed,
  setLetterPressed,
}) => {
  const [animate, setAnimate] = useState('');
  useEffect(() => {
    setLetterPressed('');
  }, [animate]);
  useEffect(() => {
    if (letterPressed === children) {
      setAnimate('border-white border-2 bg-primary-light shadow-lg');
      setTimeout(() => {
        setAnimate('');
      }, 310);
    }
  }, [letterPressed]);

  return (
    <Button
      type="primary"
      modifiers={`w-12 h-12 rounded-md flex items-center justify-center ${animate}`}
    >
      {children}
    </Button>
  );
};

export default WordleButton;
