import React, { useCallback } from 'react'
import { useState, 
         useEffect,
         useMemo } from 'react'
import { Movie } from '../../interfaces/movieResponse'
import {debounce} from 'lodash';
import MovieCard from './MovieCard';

type Props  = {
    items: Movie[] | [],
    modifiers: string,
    childComponentModifiers: string,
    renderFunction: Function,
}
const filterItems = (itemsToFilter: Movie[] | [], searchTerm: string) => {
    const filteredItems = itemsToFilter.filter(item => {
        if(item.untitled){
            return;
        }
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return filteredItems;
}
const Search: React.FC<Props> = ({items, modifiers, renderFunction}) => {
    const [searchTerm, setSearchTerm] = useState('');
    let displayList = items;
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }
    if(searchTerm !== '' && items.length > 0) {
        displayList = filterItems(items, searchTerm);
    }
    //const debouncedResults = useCallback(() => {debounce(handleTextChange, 300); console.log('caca')}, [searchTerm]);
    
  
    return (
        <div className='flex justify-center flex-wrap flex-col w-full'>
            <input type="text" 
                   value={searchTerm}
                   onChange={handleTextChange} 
                   className="shadow-md mt-6 mx-20 p-2 
                              rounded-full outline-none border-2 border-transparent
                              focus:border-primary transition ease-in-out" 
                    placeholder='Search in Popular'/>
            <div className='flex flex-wrap justify-center w-full'>
                {renderFunction(displayList)}
            </div>
        </div>
    );
}

export default Search;