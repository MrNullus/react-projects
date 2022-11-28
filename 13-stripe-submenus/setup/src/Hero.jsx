import React from 'react';
import phoneImg from './images/phone.svg';

import { useGlobalContext } from './context';

const Hero = () => {
  console.log(useGlobalContext());
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <article></article>

      <article className="hero-images">
        <img 
          className="phone-img"
          src={phoneImg}
          alt="Phone"
        />
      </article>
    </section>
  );
};

export default Hero;
