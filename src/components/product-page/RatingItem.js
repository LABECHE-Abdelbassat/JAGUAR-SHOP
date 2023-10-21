import React from 'react'
import StartReview from '../all/StartReview'

const RatingItem = () => {
  return (
    <div className='bg-light p-3 rounded-2 mb-3'>

        <div className='px-3 d-flex gap-3'>
            <div className='fs-4 fw-semibold' >User Name</div>
            <div className='mt-1'>            <StartReview readOnly={true} size={22} initialValue={1.7} />
</div>
        </div>
        <p className=' pe-3 ps-3 mt-2 fs-6' >hello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commit</p>
    </div>
  )
}

export default RatingItem