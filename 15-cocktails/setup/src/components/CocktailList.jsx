import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();
  console.table(cocktails);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length > 1) {
    <h2 className="section-title">
      No cocktails matched your search criteria
    </h2>
  }

  return (
    <sectio className="section">
      <h2 className="section-title">
        cocktail list component
      </h2>

      <div className="cocktails-center">
        {
          cocktails.map(( item ) => (
            <Cocktail 
              key={ item.id } 
              { ...item } 
            />
          ));
        }
      </div>
    </sectio>
  );
};

export default CocktailList;
