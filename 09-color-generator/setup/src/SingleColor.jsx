import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(..rgb);
  let   colorValue = `#${hexColor}`;
  let percentValue = `${weight}%`

  useEffect(() => {
    const timout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeou(timeout);
  }), [alert];

  return (
    <article 
      className={`color ${index >= 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        setAlert(true);

        navigator.clipboard.writeText(colorValue);
      }}
    >
      <p className="percent-value">
        {percentValue}
      </p>
      <p className="color-value">
        {colorValue}
      </p>

      {alert && <p className="alert">Copied to clipboard!</p>}
    </article>
    }
  );
}

export default SingleColor;
