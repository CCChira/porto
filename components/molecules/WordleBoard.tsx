import React from 'react';
import WordleKeyboard from '../atoms/WordleKeyboard';
import { board } from '../../constants/keyArrays';
type Props = {};

const WordleBoard: React.FC<Props> = ({}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div>
        {board.map((row: string[], index: number) => {
          return (
            // <div key={index} className="flex gap-2">
            //   {row.map((position: string, index2: number) => {
            //     return (
            //       <div
            //         key={`${index} + ${index2}`}
            //         className="w-8 h-8 mb-10"
            //       ></div>
            //     );
            //   })}
            // </div>
            <Line key={index} />
          );
        })}
      </div>
      <WordleKeyboard />
    </div>
  );
};
const Line: React.FC<Props> = ({}) => {
  return <></>;
};
export default WordleBoard;
