import React, { useEffect, useState } from 'react';
import WordleKeyboard from '../atoms/WordleKeyboard';
import Modal from '../molecules/Modal';
import Button from '../atoms/Button';
import { words } from '../../constants/keyArrays';
import { tile } from '../../constants/keyArrays';
import { WordleSolution } from '../../interfaces/wordleSolution';
import { isAlphaNumeric } from '../../utils/stringCheckers';
type Props = {};
const WORD_LENGTH = 5;

const createSolutionObject = (solution: string) => {
  const solutionObject: WordleSolution = {};
  for (let i = 0; i < solution.length; i++) {
    solutionObject[solution[i]] = solutionObject[solution[i]]
      ? solutionObject[solution[i]] + 1
      : 1;
  }
  return solutionObject;
};
const WordleBoard: React.FC<Props> = ({}) => {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [letterPressed, setLetterPressed] = useState('');
  const [displayModal, setDisplayModal] = useState(false);
  const [solution, setSolution] = useState('');
  const solarray = solution.split('');

  useEffect(() => {
    console.log(words.length);
    setSolution(words[Math.floor(Math.random() * words.length)]);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleAction);
    window.addEventListener(
      'wordle-letter-pressed',
      handleAction as EventListener
    );
    return () => {
      window.removeEventListener('keydown', handleAction);
      window.removeEventListener(
        'wordle-letter-pressed',
        handleAction as EventListener
      );
    };
  }, [currentGuess]);

  const handleCorrectGuess = () => {
    setGuesses(Array(6).fill(null));
    setSolution(words[Math.floor(Math.random() * words.length)]);
    setDisplayModal(false);
  };
  const handleAction = (event: CustomEvent | KeyboardEvent) => {
    let action: string;
    if (event instanceof CustomEvent) {
      action = event.detail;
    } else {
      action = event.key;
    }
    if (action === 'Enter') {
      if (currentGuess.length !== 5) {
        return;
      }
      if (words.find((word) => word === currentGuess)) {
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((guess) => guess === null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess('');
        setDisplayModal(solution === currentGuess);
      } else return;
    }
    if (action === ' ') {
      return;
    }
    if (action === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
      return;
    }
    if (!isAlphaNumeric(action)) return;
    if (currentGuess.length < 5) {
      setLetterPressed(action);
      setCurrentGuess((oldGuess) => oldGuess + action);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="flex justify-center w-full my-5">
        <div className="flex flex-col gap-2">
          {guesses.map((guess, index) => {
            const isCurrentGuess =
              index === guesses.findIndex((val) => val == null);
            return (
              <Line
                guess={isCurrentGuess ? currentGuess : guess ?? ''}
                isFinal={!isCurrentGuess && guess != null}
                key={index}
                solution={solution}
              />
            );
          })}
        </div>
      </div>
      <WordleKeyboard
        letterPressed={letterPressed}
        setLetterPressed={setLetterPressed}
      />
      <div className="mt-10">
        <div className="flex">
          <div>
            <p className="text-center">Solution(if you're a pussy)</p>
            <div className="flex gap-2">
              {solarray.map((letter: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center w-12 h-12 font-bold text-gray-600 transition duration-300 ease-in-out bg-gray-600 rounded-md hover:cursor-default hover:text-white"
                  >
                    {letter}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ml-10">
            <Legend />
          </div>
        </div>
      </div>

      {displayModal ? (
        <Modal>
          <div>
            <h2 className="text-2xl">Congratulations!</h2>
            <div className="m-10 ml-0">
              <p className="mt-10">You have solved the wordle!</p>
              <Button
                type="primary"
                modifiers="h-12 mt-10"
                onClick={() => handleCorrectGuess()}
              >
                Get new word?
              </Button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};
type LineProps = {
  guess: Array<string>;
  isFinal: boolean;
  solution: string;
};
const Line: React.FC<LineProps> = ({ guess, isFinal, solution }) => {
  const lineSolution = createSolutionObject(solution);
  const squares: JSX.Element[] = [];
  const handleDecision = (
    currentCharacter: string,
    index: number,
    finalClass: string
  ) => {
    if (currentCharacter === solution[index]) {
      finalClass = `${tile.default} ${tile.correct}`;
      lineSolution[currentCharacter]--;
    } else if (currentCharacter) {
      if (lineSolution[currentCharacter] >= 1) {
        finalClass = `${tile.default} ${tile.wrongPosition}`;
        lineSolution[currentCharacter]--;
      } else {
        finalClass = `${tile.default} ${tile.wrong}`;
      }
    }
    return finalClass;
  };

  for (let i = 0; i < WORD_LENGTH; i++) {
    const currentCharacter = guess[i];
    const tileClass = `${tile.default}`;
    let tileFinalClass = '';
    if (isFinal) {
      if (currentCharacter) {
        tileFinalClass = handleDecision(currentCharacter, i, tileClass);
      }
    }
    squares.push(
      <div key={i} className={tileFinalClass ? tileFinalClass : tile.default}>
        {currentCharacter ? currentCharacter : ''}
      </div>
    );
  }
  let className = tile;
  return <div className="flex gap-2">{squares}</div>;
};
const Legend: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <div className={tile.default}>x</div>
        <p className="ml-10">Unsubmitted letter</p>
      </div>

      <div className="flex items-center">
        <div className={`${tile.default} ${tile.wrong}`}>x</div>
        <p className="ml-10">Incorrect letter</p>
      </div>

      <div className="flex items-center">
        <div className={`${tile.default} ${tile.wrongPosition}`}>x</div>
        <p className="ml-10">Correct letter, incorrect position</p>
      </div>

      <div className="flex items-center">
        <div className={`${tile.default} ${tile.correct}`}>x</div>
        <p className="ml-10">Correct!</p>
      </div>
    </div>
  );
};
export default WordleBoard;
