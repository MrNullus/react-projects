import React, { useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


export const ButtonWrapper = ({ people, index, setIndex }) => {

	function checkNumber(number) {
		if (number > people.length - 1) {
			return 0;
		}

		if (number < 0) {
			return people.length - 1;
		}

		return number;
	}

	function prevPerson() {
 		setIndex(( index ) => {
			let newIndex = index - 1;	

			return checkNumber(newIndex);
		});
	}

	function nextPerson() {
		setIndex(( index ) => {
			let newIndex = index + 1;	

			return checkNumber(newIndex);
		});
	}

	function randomPerson() {
		let randomNumber = Math.floor(Math.random() * people.length);

		if (randomNumber === index) {
			randomNumber = index + 1;
		}

		setIndex(checkNumber(randomNumber));
	}


	return (
		<div className="btn-wrraper">

      <div className="button-container">

	      <button className="prev-btn" 
	        onClick={prevPerson}>
	        <FaChevronLeft />
	      </button>

	      <button className="next-btn" 
	        onClick={nextPerson}>
	        <FaChevronRight />
	      </button>

    	</div>

    	<button className="random-btn" 
    		onClick={randomPerson}>
	      Suprise Me
	    </button>  

	  </div>
	);

};
