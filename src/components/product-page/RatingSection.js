import React from 'react'
import StartReview from '../all/StartReview'
import RatingItem from './RatingItem'
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../all/MyVerticallyCenteredModal';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllReviews } from '../../redux/actions/reviewAction';

const RatingSection = ({id}) => {
    const dispatch = useDispatch();
    const allReviews = useSelector(state => state.ReviewReducer.allReviews?.data);
      const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
      dispatch(getAllReviews(`/api/v1/products/${id}/reviews`))
    }, [])
    
    function hundleClickHide(){
        setModalShow(false)
    }
    
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
                    <button  className='reviews-btn mt-1-5'>50 reviews</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={hundleClickHide}
                        id={id}
                    />
                </div>
            </div>
            <button onClick={() => setModalShow(true)} className='btn btn-outline-success p-2 px-3'>Add Review</button>

        </div>
        {allReviews?.map((item)=>{
            return <RatingItem/>
        })}
        
        
    </>

  )
}

export default RatingSection