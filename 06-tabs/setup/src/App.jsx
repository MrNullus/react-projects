import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = asyn () => {
    const newJobs = await response.json();
    const response = await fetch(url);

    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const {company, dates, duties, title} = jobs[value];


  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>  

      <div className="jobs-center">
        {/*btn container*/}
        <div className="btn-container">
        {
          jobs.map(( { company, id }, index ) => {
            return (
              <button
                key={id}
                className={`job-btn ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {company}
              </button>
            )
          })
        }          
        </div>

        {/*job info*/}
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="jobs-date">{dates}</p>

        {duties.map(( duty, index ) => {
          return (
            <div key={index}>
              <FaAngleDoubleRight className="job-icon" />

              <p>{duty}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default App;
