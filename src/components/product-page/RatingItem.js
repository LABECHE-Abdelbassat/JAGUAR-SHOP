import React, { useState } from 'react'
import StartReview from '../all/StartReview'
import { Button, CloseButton } from 'react-bootstrap'
import MyVerticallyCenteredModal from '../all/MyVerticallyCenteredModal'

const RatingItem = ({item,theCreator}) => {
  const [modalShow, setModalShow] = useState(false);
  function hundleClickHide(){
    setModalShow(false)
  }
  return (
    <div className='bg-light position-relative p-3 rounded-2 mb-3'>

        <div className='px-3 pt-0 align-items-center d-flex gap-3'>
            <div className='fs-5  fw-semibold' >{item.user.name}</div>
            <div className='mb-1'><StartReview readOnly={true} size={21} initialValue={item.ratings} />
        </div>
          {theCreator? <Button onClick={() => setModalShow(true)} variant='light' className=' fs-6 ms-auto'>update</Button>:""}
          <MyVerticallyCenteredModal
                show={modalShow}
                onHide={hundleClickHide}
                id={item._id}
                action={"update"}
            />
        </div>
        {/* <p className=' pe-3 ps-3 mt-2 fs-6' >hello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commithello thre lorem ipsum doler set commit hello thre lorem ipsum doler set commit</p> */}
    </div>
  )
}

export default RatingItem