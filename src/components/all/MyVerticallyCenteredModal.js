import React from 'react'
import { Button, Form, FormControl, Modal } from 'react-bootstrap';
import StartReview from './StartReview';
import { useRef } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrand } from '../../redux/actions/brandAction';
import { createReview } from '../../redux/actions/reviewAction';

function MyVerticallyCenteredModal(props) {
    const review_text = useRef();
    const [rate, setrate] = useState(0)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch();

    function modifyRate(rate){
        setrate(rate)
        console.log(rate+"9iiiiiiiw")
        console.log(review_text.current.value)
    }
    async function hundleClickAddReview(){
        const reviewObj = {
            review:review_text.current.value,
            ratings : rate
        }
        console.log(reviewObj)
        await dispatch(createReview(`/api/v1/products/${props.id}/reviews`,reviewObj,token))
        props.onHide();
    }
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Review
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <StartReview readOnly={false} size={30} initialValue={1.7} modifyRate={modifyRate}/>          
        <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control ref={review_text} as="textarea" placeholder='product Review' rows={3} />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hundleClickAddReview}>Add Review</Button>
        </Modal.Footer>
      </Modal>
    );
  }
export default MyVerticallyCenteredModal