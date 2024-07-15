import React, { useEffect } from "react";
import { Button, Form, FormControl, Modal, Spinner } from "react-bootstrap";
import StartReview from "./StartReview";
import { useRef } from "react";
import { useState } from "react";
import {
  useCreateReviewOnProductMutation,
  useUpdateReviewMutation,
} from "../../reduxQuery/APIs/reviewApi";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import { ToastContainer, toast } from "react-toastify";

function MyVerticallyCenteredModal(props) {
  const review_text = useRef();
  const [rate, setrate] = useState(0);
  const [createReview, { isLoading, isError, isSuccess, error }] =
    useCreateReviewOnProductMutation(props.id);
  const [
    updateReview,
    {
      isLoading: updateloading,
      isError: updateIsError,
      isSuccess: updateIsSuccess,
      error: updateError,
    },
  ] = useUpdateReviewMutation();

  function modifyRate(rate) {
    setrate(rate);
  }

  async function hundleClickAddReview() {
    const reviewObj = {
      title: review_text.current.value,
      ratings: rate,
    };
    await createReview({ review: reviewObj, id: props.id });
  }
  async function hundleClickUpdateReview() {
    const reviewObj = {
      title: review_text.current.value,
      ratings: rate,
    };
    await updateReview({ review: reviewObj, id: props.id });
  }
  useEffect(() => {
    if (review_text?.current?.value.length > -50) {
      review_text.current.value = props.title || "";
    }
  }, [props]);

  useEffect(() => {
    if (isSuccess) {
      props.onHide();
    }
  }, [isSuccess]);
  useEffect(() => {
    if (updateIsSuccess) {
      props.onHide();
    }
  }, [updateIsSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(
        error?.status === 400
          ? error?.data?.errors[0]?.msg
          : error?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [isError, error]);
  useEffect(() => {
    if (updateIsError) {
      toast.error(
        updateError?.status === 400
          ? updateError?.data?.errors[0]?.msg
          : updateError?.data?.message || "Network Error!",
        { delay: 50, autoClose: 2000 }
      );
    }
  }, [updateIsError, updateError]);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ToastContainer />
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StartReview
          readOnly={false}
          size={30}
          initialValue={props?.review}
          modifyRate={modifyRate}
        />
        <Form.Group className="mt-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            ref={review_text}
            as="textarea"
            placeholder="product Review"
            rows={3}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {props.action == "create" ? (
          <Button variant="success" onClick={hundleClickAddReview}>
            Add Review
            {isLoading ? <Spinner size="sm" className="ms-3"></Spinner> : ""}
          </Button>
        ) : (
          <Button variant="success" onClick={hundleClickUpdateReview}>
            Update Review
            {updateloading ? (
              <Spinner size="sm" className="ms-3"></Spinner>
            ) : (
              ""
            )}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
