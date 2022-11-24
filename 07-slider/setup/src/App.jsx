import React, { useState, useEffect } from 'react';

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

import data from './data';


function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex]   = useState(0);
  
  useEffect(() => {
    const lastIndex = person.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > 0) {
      setIndex(0);
    }

  }, [index, people]);

  useEffect(() => {
    setInterval(() => {
      setIndex(index + 1)
    }, 3000);
  }, [index]);


  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {
          people.map(( person, personIndex ) => {
            const { id, image, name, title, quote } = person;

            // More stuff coming UP
            let position = 'nextSlide';

            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (
              personIndex === index - 1 || 
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'lastSlide';
            }

            return (
              <article key={id} clasName={position}>
                <img src={image} alt={name} className="person-img" />

                <p className="title">{title}</p>
                <p className="text">{quote}</p>

                <FaQuoteRight className="icon" />
              </article>
            );
          })
        }

        {/*control buttons*/}
        <button className="prev" onClick={() => setIndex - 1}>
          <FiChevronLeft />  
        </button>

        <button className="next" onClick={() => setIndex(index + 1)}> 
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;