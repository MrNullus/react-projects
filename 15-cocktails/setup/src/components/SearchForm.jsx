import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    let term = searchValue.current.value;
    setSearchTerm(term);
  };
  const handleSubmit = ( e ) => {
    e.preventDefault;
  };

  return (
    <section className="section search">
      <form 
        className="search-form"
        onChange={handleSubmit}
      >
        <div className="form-control">
          <label htmlFor="name">
            Search your favorite cocktail
          </label>

          <input 
            type="text" 
            id="name" 
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
