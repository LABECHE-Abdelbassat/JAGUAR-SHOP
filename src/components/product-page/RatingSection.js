import React from 'react'
import StartReview from '../all/StartReview'
import RatingItem from './RatingItem'
import Modal from 'react-bootstrap/Modal';
import { Button, Spinner } from 'react-bootstrap';
import MyVerticallyCenteredModal from '../all/MyVerticallyCenteredModal';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllReviews } from '../../redux/actions/reviewAction';
import { useGetAllReviewsOnProductQuery, useGetAllReviewsQuery } from '../../reduxQuery/APIs/reviewApi';
import SuccessMessage from '../all/SuccessMessage';
import ErrorMessage from '../all/ErrorMessage';
import { useGetLoggedUserQuery } from '../../reduxQuery/APIs/loggedUserApi';

const RatingSection = ({product}) => {
    const {data , isLoading ,error, isError } = useGetAllReviewsOnProductQuery(product?._id);
    const [modalShow, setModalShow] = useState(false);
    const {data:loggedUser , isError:loggdUserIsError , error :loggedError} = useGetLoggedUserQuery();
    
    function hundleClickHide(){
        setModalShow(false)
    }
    
  return (
    <div className='position-relative'>
        {product?._id?.length>0 ?<div style={{direction:"rtl"}}>
          {isError ? <ErrorMessage error={error}/> : ""}
        </div>:""}
        <div style={{direction:"rtl"}}>
          {loggdUserIsError ? <ErrorMessage error={loggedError}/> : ""}
        </div>
        <div className='d-flex mt-4 pt-2 align-items-center'>
            <div className='flex-fill line me-3'></div>
            <div className='text-main m-0 p-0 fs-4 fw-bold'>PRODUCT REVIEWS</div>
            <div className='flex-fill line ms-3'></div>

        </div>
        <div className='d-flex mb-4 mt-3 align-items-center justify-content-between'>
            <div className="d-flex align-items-center gap-3">
                <div className='fs-1 fw-bold'>{product?.ratingsAverage}</div>
                <div>
                    <StartReview readOnly={true} size={22} initialValue={product?.ratingsAverage} />
                    <button  className='reviews-btn mt-1-5'>{product?.ratingsQuantity} reviews</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={hundleClickHide}
                        id={product?._id}
                        action={"create"}
                    />
                </div>
            </div>
            <button onClick={() => setModalShow(true)} className='btn btn-outline-success p-2 px-3'>Add Review</button>

        </div>
        {isLoading ? <div className='text-center'><Spinner size='lg' variant='success' className='mt-4 align-self-center'></Spinner></div>:
        <div>
            {data?.data?.map((item)=>{
                if(loggedUser.data._id == item.user._id){
                    return <RatingItem item={item} theCreator={true}/>
                }else
                return <RatingItem item={item} theCreator={false}/>
            })}
        </div>
        }
        
        
        
    </div>

  )
}

export default RatingSection