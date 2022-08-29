import React, { useCallback, useState, useEffect, useMemo } from 'react'; //react Stuff

import { faList, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Movie } from '../../interfaces/movieResponse'; //constants, assets and types
type Props = {
  items: Movie[] | [];
  modifiers: string;
  childComponentModifiers: string;
  renderFunction: Function;
  loading: boolean;
  desktopItems: number;
};
const filterItems = (itemsToFilter: Movie[] | [], searchTerm: string) => {
  const filteredItems = itemsToFilter.filter((item) => {
    if (item.untitled) {
      return;
    }
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return filteredItems;
};
const Search: React.FC<Props> = ({
  items,
  modifiers,
  renderFunction,
  loading,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedView, setSelectedView] = useState('list');
  let displayList = items;
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleListSwitch = () => {
    setSelectedView('list');
  };
  const handleGridSwitch = () => {
    setSelectedView('grid');
  };

  if (searchTerm !== '' && items.length > 0) {
    displayList = filterItems(items, searchTerm);
  }
  //const debouncedResults = useCallback(() => {debounce(handleTextChange, 300); console.log('caca')}, [searchTerm]);

  return (
    <div className="flex flex-col flex-wrap justify-center w-full">
      <div className="flex items-center justify-center w-full px-6 mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={handleTextChange}
          className="w-full p-2 transition ease-in-out border-2 border-transparent rounded-full shadow-md outline-none mr-7 placeholder-primary focus:border-primary"
          placeholder="Search in Popular"
        />
        <div className="flex items-center justify-center flex-shrink-0 w-24 bg-white rounded-full h-11">
          <div
            onClick={handleListSwitch}
            className={
              (selectedView === 'list' ? 'bg-primary' : 'bg-white') +
              ' flex h-full w-1/2 items-center justify-center rounded-full transition duration-300 ease-in-out'
            }
          >
            <FontAwesomeIcon
              icon={faList}
              className={
                (selectedView === 'list' ? 'text-white' : 'text-primary') +
                ' transition duration-300 ease-in-out hover:text-primary-light'
              }
            />
          </div>
          <div
            onClick={handleGridSwitch}
            className={
              (selectedView === 'grid' ? 'bg-primary' : 'bg-white') +
              ' flex h-full w-1/2 items-center justify-center rounded-full transition duration-300 ease-in-out'
            }
          >
            <FontAwesomeIcon
              icon={faTableCells}
              className={
                (selectedView === 'grid' ? 'text-white' : 'text-primary') +
                ' transition duration-300 ease-in-out hover:text-primary-light'
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {loading ? (
          <svg className="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24"></svg>
        ) : (
          renderFunction(displayList, modifiers)
        )}
      </div>
    </div>
  );
};

export default Search;
