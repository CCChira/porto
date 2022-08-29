import React from 'react';

import Button from '../atoms/Button';
import { Movie } from '../../interfaces/movieResponse';
type Props = {
  movie: Movie;
  modifiers: string;
};
const IMAGE_SOURCE_ROOT: string = 'https://image.tmdb.org/t/p/original';
const MovieCard: React.FC<Props> = ({ movie, modifiers }) => {
  return (
    <div className="flex flex-row w-full m-4 bg-white rounded-lg shadow-lg max-h-80 md:flex md:max-h-max md:w-1/3 md:flex-col lg:max-h-80 lg:flex-row">
      <img
        src={IMAGE_SOURCE_ROOT + movie.poster_path}
        className="rounded-l-lg"
      />
      <div className="flex flex-col w-full h-full px-3 py-3">
        <div className="mb-auto min-h-fit">
          <h1 className="relative mb-2 text-2xl font-bold h-fit w-fit line-clamp-1">
            {movie.title}
          </h1>
          <p className=" relative line-clamp-6 before:absolute before:bottom-40 before:h-0.5 before:w-10 before:bg-primary md:line-clamp-3 lg:line-clamp-6">
            {movie.overview}
          </p>
        </div>
        <div className="flex items-end self-end w-full pb-2 mt-5 lg:mt-none h-1/2 md:justify-center">
          <Button type="primary" modifiers="w-full" link="">
            Read More!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
