import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../Button';

type Props = {
  children: string;
  letterPressed: string;
  setLetterPressed: Function;
};
const tile = {
  wrong: 'bg-gray-600 text-white',
  correct: 'bg-secondary text-white',
  wrongPosition: 'bg-primary text-white',
  default:
    'flex items-center justify-center w-12 h-12 font-bold transition duration-300 ease-in-out bg-white rounded-md text-primary hover:cursor-default',
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
      setAnimate('border-white border-2 bg-gray-600 text-white shadow-2xl');
      setTimeout(() => {
        setAnimate('');
      }, 310);
    }
  }, [letterPressed]);
  const handleClick = () => {
    dispatchEvent(
      new CustomEvent('wordle-letter-pressed', { detail: children })
    );
  };
  return (
    <Button
      type="primary"
      modifiers={
        children.length > 1
          ? `w-fit h-12 rounded-md flex items-center justify-center ${animate}`
          : `w-12 h-12 rounded-md flex items-center justify-center ${animate}`
      }
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default WordleButton;
