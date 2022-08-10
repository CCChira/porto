import React from 'react';
import Button from './Button';

type Props = {
  rowLetters: string[];
  modifiers: string;
};

const WordleRow: React.FC<Props> = ({ rowLetters, modifiers }) => {
  return (
    <div className={'flex w-fit gap-4 ' + modifiers}>
      {rowLetters.map((letter: string, index: number) => {
        return (
          <Button
            type="primary"
            modifiers="w-8 h-8 rounded-md flex items-center justify-center"
            link=""
          >
            {letter}
          </Button>
        );
      })}
    </div>
  );
};

export default WordleRow;
