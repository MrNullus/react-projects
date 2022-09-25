import React, { useState } from 'react';

import Menu from './components/Menu';
import Categories from './components/Categories';

import items from './data/data';

const allCategories = [
  'all', 
  ...new Set(items.map(({ category }) => category))
];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categoryToFilter) => {
    if (categoryToFilter === 'all') {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(( item ) => item.category ===  categoryToFilter);
    setMenuItems(newItems);
  }

  return (
    <main>

      <section className="menu section">

        <div className="title">
          <h2>our menu</h2>

          <div className="underline"></div>
        </div>

        <Categories 
          categories={categories} 
          filterItems={filterItems} 
        />
        <Menu items={menuItems} />

      </section>

    </main>
  );

}

export default App;
