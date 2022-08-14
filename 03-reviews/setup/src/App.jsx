import React from 'react';

import Review from './components/Review';


function App() {

  return (
    <main>

      <section className="container">

        <div className="title">
          <h2>Reviews Project</h2>

          <div className="underline"></div>
        </div>

        <Review />

      </section>

    </main>
  );

}

export default App;
