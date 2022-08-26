//create nextjs page component with typescript
import * as React from 'react';
import { NextPage } from 'next';
import Header from '../components/Header';
import Button from '../components/atoms/Button';

export interface Props {}

const landingPage: NextPage<Props> = () => {
  return (
    <div className="h-full">
      <Header modifiers="bg-white"></Header>
      <div className="flex flex-col items-center justify-center w-full h-full gap-10">
        <input type="text" placeholder="username" />
        <input type="email" placeholder="email" />
        <Button type="primary">Login</Button>
        <Button type="primary" modifiers="w-40 h-12" link="/tmdb">
          TMDB playground
        </Button>
        <Button type="primary" modifiers="w-40 h-12" link="/wordle">
          Wordle Clone
        </Button>
      </div>
    </div>
  );
};

export default landingPage;
