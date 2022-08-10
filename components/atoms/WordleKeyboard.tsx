import React from 'react';
import { qwerty } from '../../constants/keyArrays';
import WordleRow from './WordleKeyboardRow';
type Props = {};

const WordleKeyboard: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="" id="line1">
        <WordleRow rowLetters={qwerty.row1} modifiers="" />
      </div>
      <div className="" id="line2">
        <WordleRow rowLetters={qwerty.row2} modifiers="ml-8" />
      </div>
      <div className="" id="line3">
        <WordleRow rowLetters={qwerty.row3} modifiers="ml-16" />
      </div>
    </div>
  );
};

export default WordleKeyboard;
