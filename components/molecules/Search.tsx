import React, 
        { useCallback,
          useState, 
          useEffect,
          useMemo } from 'react'; //react Stuff

import { debounce } from 'lodash'; //lodash stuff

import MovieCard from './MovieCard'; //components

import { Movie } from '../../interfaces/movieResponse'; //constants, assets and types
type Props  = {
    items: Movie[] | [],
    modifiers: string,
    childComponentModifiers: string,
    renderFunction: Function,
    loading: boolean,
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
const Search: React.FC<Props> = ({items, modifiers, renderFunction, loading}) => {
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
                {
                loading 
                    ? 
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
                    :
                    renderFunction(displayList, modifiers)
                }
                
            </div>
        </div>
    );
}

export default Search;