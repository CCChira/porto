import React, { useEffect, useState } from 'react'; //react stuff
import Image from 'next/image';
import { NextPage } from 'next'; //nextJS stuff
import Link from 'next/link';

import { faBars } from '@fortawesome/free-solid-svg-icons'; //font awesome stuff
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Search from '../components/molecules/Search'; //MY components
import Header from '../components/Header';
import MovieCard from '../components/molecules/MovieCard';

import OrangeSlice from '../assets/orange-svgrepo-com.svg'; //constants, assets and types
import { Movie } from '../interfaces/movieResponse';

export interface Props {}
const renderItems = (listToDisplay: Movie[], modifiers: string) => {
  return listToDisplay.map((item: Movie, index: number) => (
    <MovieCard key={index} movie={item} modifiers={modifiers} />
  ));
};
const landingPage: NextPage<Props> = () => {
  const url =
    'https://api.themoviedb.org/3/trending/all/day?api_key=e6fb97fa91c65ad6806fafc55a2f2e5b&language=en-US';
  //useEffect on page load to api fetch data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPopular().then((res) => {
      setLoading(false);
    });
    console.log(data);
  }, []);
  const fetchPopular = async () => {
    const movieData = await fetch(url);
    const movies = await movieData.json();
    movies.results.map((movie: Movie) => {
      if (!movie.title) {
        movie.untitled = true;
        movie.title = '*Untitled*';
      }
      return movie;
    });
    setData(movies.results);
  };

  return (
    <div>
      <Header modifiers="bg-white"></Header>
      <div className="flex flex-wrap justify-center">
        <Search
          items={data}
          modifiers=""
          renderFunction={renderItems}
          childComponentModifiers=""
          loading={loading}
          desktopItems={3}
        />
      </div>
    </div>
  );
};

export default landingPage;
