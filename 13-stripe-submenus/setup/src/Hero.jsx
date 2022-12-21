import React from 'react';
import phoneImg from './images/phone.svg';

import { useGlobalContext } from './context';

const Hero = () => {
  console.log(useGlobalContext());
  const { closeSubmenu } = useGlobalContext();

  return (
    <section 
      className="hero" 
      onMouseOver={}
    >
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum reprehenderit ducimus!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum reprehenderit ducimus reprehenderit  
            ducimusreprehenderit ducimusreprehenderit reprehenderit ducimusreprehenderit ducimus repr.
            Ducimusreprehenderit ducimusreprehenderit ducimusreprehenderit ducimusreprehenderit ducimus
          </p>

          <button className="btn">
            Start now!
          </button>
        </article>

        <article className="hero-images">
          <img 
            className="phone-img"
            src={phoneImg}
            alt="Phone"
          />
        </article>
        </div>
    </section>
  );
};

export default Hero;
