import React, { useState } from 'react';

import { ButtonWrapper } from './ButtonWrapper';
import { ImgContainer } from './ImgContainer';
import { InfoPersonWrapper } from './InfoPersonWrapper';

import people from '../data/data';


const Review = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];

  return (
    <article className="review">
      
      <ImgContainer 
        { ...person } 
      />

      <InfoPersonWrapper 
        { ...person } 
      />

      <ButtonWrapper 
        people={people} 
        index={index} 
        setIndex={setIndex} 
      />

    </article>
  );

};

export default Review;
