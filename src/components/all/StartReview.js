

import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StartReview({readOnly,initialValue,size}) {
  const [rating, setRating] = useState(0)

  
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)

    // other logic
  }
  // Optinal callback functions
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => console.log('Leave')
  const onPointerMove = (value, index) => console.log(value, index)

  if (readOnly) {
    return (
        <div className='App'>
          <Rating
            readonly
            allowFraction
            initialValue={initialValue}
            size={size}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />
        </div>
      )
  }else {
    return (
        <div className='App'>
          <Rating
            allowFraction
            initialValue={2.5}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />
        </div>
      )
  }

}

export default StartReview