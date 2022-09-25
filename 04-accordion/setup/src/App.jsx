import React, { useState } from 'react';
import data from './data/data';

import Question from './components/Question';

function App() {
  const [questions, setQuestions] = useState(data);
  

  return (
    <main>

      <div className="container">
        <h3>questions and aswer about login</h3>

        <section className="info">
          {questions.map(( question ) => {
            return (
              <Question 
                key={ question.id } 
                { ...question }
              />
            );
          })}
        </section>
      </div>

    </main>
  );

}

export default App;
