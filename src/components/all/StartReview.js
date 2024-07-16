import React from "react";
import { Rating } from "react-simple-star-rating";

export function StartReview({ readOnly, initialValue, size, modifyRate }) {
  // Catch Rating value
  const handleRating = (rate) => {
    modifyRate(rate);

    // other logic
  };

  if (readOnly) {
    return (
      <div className="App">
        <Rating
          readonly
          allowFraction
          initialValue={initialValue}
          size={size}
          /* Available Props */
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Rating
          allowFraction
          initialValue={0}
          onClick={handleRating}

          /* Available Props */
        />
      </div>
    );
  }
}

export default StartReview;
