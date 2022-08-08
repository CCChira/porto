import React from 'react'
import { Movie } from '../../interfaces/movieResponse';
import Image from 'next/image';
import Button from '../atoms/Button';
type Props  = {
    movie: Movie,
    modifiers: string,
}
const IMAGE_SOURCE_ROOT: string = 'https://image.tmdb.org/t/p/original';
const MovieCard: React.FC<Props> = ({movie, modifiers}) => {
    return (
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg md:max-h-max lg:max-h-80 m-4 flex max-h-80 flex-row md:flex md:flex-col lg:flex-row">
            <img src={IMAGE_SOURCE_ROOT + movie.poster_path}/>
            <div className='px-3 py-3 w-full flex flex-col h-full'>
                <div className='min-h-fit mb-auto'>
                    <h1 className='relative text-2xl line-clamp-1 w-fit h-fit font-bold mb-2'>{movie.title}</h1>
                    <p className='line-clamp-6 md:line-clamp-3 lg:line-clamp-6 before:absolute before:w-10 before:h-0.5 before:bg-primary'> {movie.overview} </p>
                </div>
                <div className='flex h-1/2 items-end md:justify-center w-full pb-2 mt-5 lg:mt-none self-end'>
                    <Button type='primary' modifiers='w-full' link=''>Read More!</Button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;