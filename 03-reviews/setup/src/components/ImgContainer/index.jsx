import React from 'react';

import { FaQuoteRight } from 'react-icons/fa';

	
export const ImgContainer = ({ id, name, job, image, info }) => {

	return (
		<div className="img-container">
      <img src={image} alt={name} className="person-img" />

      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
	);

};

