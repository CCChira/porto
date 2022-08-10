import * as React from 'react';
import { NextPage } from 'next';
import Header from '../components/Header';
import Button from '../components/atoms/Button';
import WordleBoard from '../components/molecules/WordleBoard';
export interface Props {}

const landingPage: NextPage<Props> = () => {
  return (
    <div className="h-full">
      <Header modifiers="bg-white"></Header>
      <WordleBoard />
    </div>
  );
};

export default landingPage;
