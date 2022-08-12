import React from 'react';
import { qwerty } from '../../constants/keyArrays';
import WordleRow from './WordleKeyboardRow';
type Props = {
  letterPressed: string;
  setLetterPressed: Function;
};

const WordleKeyboard: React.FC<Props> = ({
  letterPressed,
  setLetterPressed,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="" id="line1">
        <WordleRow
          rowLetters={qwerty.row1}
          modifiers=""
          letterPressed={letterPressed}
          setLetterPressed={setLetterPressed}
        />
      </div>
      <div className="" id="line2">
        <WordleRow
          rowLetters={qwerty.row2}
          modifiers="ml-8"
          letterPressed={letterPressed}
          setLetterPressed={setLetterPressed}
        />
      </div>
      <div className="" id="line3">
        <WordleRow
          rowLetters={qwerty.row3}
          modifiers="ml-16"
          letterPressed={letterPressed}
          setLetterPressed={setLetterPressed}
        />
      </div>
    </div>
  );
};

export default WordleKeyboard;
