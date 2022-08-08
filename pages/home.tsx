import * as React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Header from '../components/Header';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrangeSlice from '../assets/orange-svgrepo-com.svg';
import Link from 'next/link';
import MovieCard from '../components/molecules/MovieCard';
import { useEffect, useState } from 'react';
import { Movie } from '../interfaces/movieResponse';
import Search from '../components/molecules/Search';
export interface Props {
}
const renderItems = (listToDisplay: Movie[], modifiers: string) => {
    return listToDisplay.map((item: Movie, index: number) => <MovieCard key={index} movie={item} modifiers={modifiers}/>);
};
const landingPage: NextPage<Props> = () => {
    const url = "https://api.themoviedb.org/3/trending/all/day?api_key=e6fb97fa91c65ad6806fafc55a2f2e5b&language=en-US";
    //useEffect on page load to api fetch data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchPopular();
        console.log(data);
    }, [])
    const fetchPopular = async () => {
        const movieData = await fetch(url);
        const movies = await movieData.json();
        movies.results.map((movie: Movie) => {
            if(!movie.title) {
                movie.untitled = true;
            } 
            return movie
        })
        setData(movies.results)
    }
 
    return (
        <div>
            <Header modifiers='bg-white shadow-lg'>
                <div className='flex items-center space-between w-full'>
                    <Link href='/'>
                        <div className='flex cursor-pointer hover:animate-bouncer-infinite ml-5'>
                            <Image src={OrangeSlice} height='40' width='40' />
                            <h1 className='self-center text-3xl'>Porto</h1>
                        </div>
                    </Link>
                    <div className='ml-auto mr-12' >
                        <FontAwesomeIcon icon={faBars} className='text-primary hover:text-primary-light transition ease-in-out duration-300' />
                    </div>
                </div>
            </Header>
            <div className='flex flex-wrap justify-center'>
                <Search items={data} modifiers='' renderFunction={renderItems} childComponentModifiers=''/>
            </div>
        </div>
    );
}

export default landingPage;