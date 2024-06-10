import React, { useState } from 'react';
import './style.css';
import { FaStar } from 'react-icons/fa';

export default function StarRating({ noOfStars = 10, onRatingChange }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  function handleReset() {
    setRating(0);
    if (onRatingChange) {
      onRatingChange(0);
    }
  }

  return (
    <div className="star-rating-container">
      <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={`star ${index <= (hover || rating) ? "active" : "inactive"}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
              title={`${index} Star${index > 1 ? 's' : ''}`}
            />
          );
        })}
        <button className="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
