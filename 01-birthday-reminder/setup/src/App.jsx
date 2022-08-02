import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="container">
        <h3>{people.count()} birthdays today</h3>

        <List people={people}/>

        <button onClick={() => setPeople([]) }>
          Clear All
        </button>
    </main>
  );
}

export default App;
