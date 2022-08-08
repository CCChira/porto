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
        <div className="w-1/3 bg-white rounded-lg shadow-lg m-4 max-h-80 flex">
            <img src={IMAGE_SOURCE_ROOT + movie.poster_path}/>
            <div className='px-2 w-1/2 flex flex-col'>
                <div className='h-1/2'>
                    <h1 className='text-2xl w-30 h-fit font-bold truncate'>{movie.title}</h1>
                    <p className='line-clamp-6'> {movie.overview} </p>
                </div>
                <div className='flex h-1/2 items-end justify-center w-full pb-2'>
                    <Button type='primary' modifiers='w-full' link=''>Read More!</Button>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;