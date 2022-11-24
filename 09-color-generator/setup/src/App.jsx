import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor]  = useState('');
  const [error, setError]  = useState(false);
  const [listColors, setListColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      // console.log(colors);
      setListColors(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>DioColor Project</h3>
      </section>

      <form onSubmit={}>
        <input 
          className={`${error ?? 'error'}`}
          type="text" 
          name="color" 
          id="color" 
          value={color}
          onChange={( e ) => setColor(e.target.value)}
          placeholder="#b4c3a9"
        />

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <section className="colors">
        {listColors.map(( color, index ) => (
          <SingleColor 
            key={index} 
            index={index} 
            {...color} 
            hexColor={color.hex}
          />  
        ))}
      </section>
    </>
  );
}

export default App;
