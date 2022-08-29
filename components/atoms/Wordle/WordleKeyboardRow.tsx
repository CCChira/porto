import React from 'react';
import Button from '../Button';
import WordleButton from './WordleButton';

type Props = {
  rowLetters: string[];
  modifiers: string;
  letterPressed: string;
  setLetterPressed: Function;
};

const WordleRow: React.FC<Props> = ({
  rowLetters,
  modifiers,
  letterPressed,
  setLetterPressed,
}) => {
  return (
    <div className={'flex w-fit gap-4 ' + modifiers}>
      {rowLetters.map((letter: string, index: number) => {
        return (
          <WordleButton
            key={index}
            letterPressed={letterPressed}
            setLetterPressed={setLetterPressed}
          >
            {letter}
          </WordleButton>
        );
      })}
    </div>
  );
};

export default WordleRow;
