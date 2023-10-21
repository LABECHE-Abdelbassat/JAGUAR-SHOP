import React from 'react'
import StartReview from '../all/StartReview'
import RatingItem from './RatingItem'

const RatingSection = () => {
  return (
    <>
        <div className='d-flex mt-4 pt-2 align-items-center'>
            <div className='flex-fill line me-3'></div>
            <div className='text-main m-0 p-0 fs-4 fw-bold'>PRODUCT REVIEWS</div>
            <div className='flex-fill line ms-3'></div>

        </div>
        <div className='d-flex mb-4 mt-3 align-items-center justify-content-between'>
            <div className="d-flex align-items-center gap-3">
                <div className='fs-1 fw-bold'>4.7</div>
                <div>
                    <StartReview readOnly={true} size={22} initialValue={1.7} />
                    <button className='reviews-btn mt-1-5'>50 reviews</button>
                </div>
            </div>
            <button className='btn btn-outline-success p-2 px-3'>Add Review</button>

        </div>
        <RatingItem/>
        <RatingItem/>
        <RatingItem/>
        
    </>

  )
}

export default RatingSection