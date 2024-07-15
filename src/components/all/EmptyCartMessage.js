import React from "react";
import noitemfoundImage from "../../images/empty_cart.png";

const EmptyCartMessage = () => {
  return (
    <div className="main-color w-100 fw-semibold p-md-5 p-sm-0  fs-4 mt-3 text-center py-5">
      <img
        src={noitemfoundImage}
        className="img-fluid p-sm-0 p-md-5 pb-md-3 text-center w-50 "
        alt="No Item Found"
      />
      <div className="main-color  fw-semibold pb-5 mb-5  fs-2 mb-5 mt-3 text-center pb-5">
        Cart is Empty!
      </div>
    </div>
  );
};

export default EmptyCartMessage;
