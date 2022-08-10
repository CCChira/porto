import { kebabCase } from 'lodash';
import React from 'react';
import { board } from '../../constants/keyArrays';
type Props = {};

const Input: React.FC<Props> = ({}) => {
  return (
    <div>
      {board.map((row: string[], index: number) => {
        return (
          // <div key={index}>
          // {
          //  row.map((position: string, index2: number) => {
          //     return(
          //       <input type="text" value="" key={index, index2}/>
          //     )

          //   })
          // }
          // </div>
          <></>
        );
      })}
    </div>
  );
};

export default Input;
