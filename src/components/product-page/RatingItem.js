import React, { useState } from "react";
import StartReview from "../all/StartReview";
import { Icon } from "@iconify/react";

import { Button, CloseButton } from "react-bootstrap";
import MyVerticallyCenteredModal from "../all/MyVerticallyCenteredModal";
import { useDeleteReviewMutation } from "../../reduxQuery/APIs/reviewApi";
import SuccessMessage from "../all/SuccessMessage";
import ErrorMessage from "../all/ErrorMessage";

const RatingItem = ({ item, theCreator }) => {
  const [modalShow, setModalShow] = useState(false);
  const [
    deleteReview,
    { isSuccess: deleteSuccess, isError: deleteIsError, error: deleteError },
  ] = useDeleteReviewMutation();

  function hundleClickHide() {
    setModalShow(false);
  }
  async function hundleDeleteReview() {
    await deleteReview(item?._id);
  }
  return (
    <div className="bg-light p-3 rounded-2 mb-3">
      <div style={{ direction: "rtl" }}>
        {deleteIsError ? <ErrorMessage error={deleteError} /> : ""}
      </div>
      <div className="px-3 pt-0 align-items-center d-flex gap-3">
        <div className="fs-5  fw-semibold">{item?.user?.name}</div>
        <div className="mb-1">
          <StartReview readOnly={true} size={21} initialValue={item?.ratings} />
        </div>
        {theCreator ? (
          <Button
            onClick={() => setModalShow(true)}
            variant="light"
            className=" fs-6 ms-auto mb-1 "
          >
            <Icon icon="tabler:edit" color="#787878" fontSize={23} />
          </Button>
        ) : (
          ""
        )}
        {theCreator ? (
          <CloseButton onClick={hundleDeleteReview}></CloseButton>
        ) : (
          ""
        )}
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={hundleClickHide}
          id={item._id}
          title={item?.title}
          review={item?.ratings}
          action={"update"}
        />
      </div>
      <p className=" pe-3 ps-3 mt-2 fs-6">{item?.title}</p>
    </div>
  );
};

export default RatingItem;
