import React from 'react';
import WordleKeyboard from '../atoms/WordleKeyboard';
type Props = {};

const WordleBoard: React.FC<Props> = ({}) => {
  return (
    <div className="flex items-center justify-center">
      <WordleKeyboard />
    </div>
  );
};

export default WordleBoard;
