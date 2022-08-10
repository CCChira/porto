import React from 'react';

import Image from 'next/image';
import Button from '../atoms/Button';
import { Movie } from '../../interfaces/movieResponse';
type Props = {
  movie: Movie;
  modifiers: string;
};
const IMAGE_SOURCE_ROOT: string = 'https://image.tmdb.org/t/p/original';
const MovieCard: React.FC<Props> = ({ movie, modifiers }) => {
  return (
    <div className="flex flex-row bg-white w-full m-4 max-h-80 shadow-lg md:w-1/3 rounded-lg md:max-h-max md:flex md:flex-col lg:flex-row lg:max-h-80">
      <img src={IMAGE_SOURCE_ROOT + movie.poster_path} className='rounded-l-lg' />
      <div className="w-full flex flex-col h-full px-3 py-3">
        <div className="min-h-fit mb-auto">
          <h1 className="relative w-fit h-fit  mb-2 text-2xl font-bold line-clamp-1">
            {movie.title}
          </h1>
          <p className=" relative line-clamp-6 md:line-clamp-3 lg:line-clamp-6 before:absolute before:w-10 before:h-0.5 before:bottom-40 before:bg-primary">
            {movie.overview}
          </p>
        </div>
        <div className="flex items-end self-end w-full h-1/2 pb-2 mt-5 md:justify-center lg:mt-none">
          <Button type="primary" modifiers="w-full" link="">
            Read More!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
