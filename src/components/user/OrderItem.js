import React from "react";
import OrdersProductItem from "./OrdersProductItem";
import { Row } from "react-bootstrap";
import galery from "../../images/galery.jpg";
const OrderItem = ({ data, size, index }) => {
  return (
    <div className="border border-1 mb-3 rounded-3 p-3">
      <h2 className="mb-3 color-main fw-semibold">Order n#{size - index}</h2>
      <div className="mb-3 rounded-3 ">
        <div className="mb-2">
          <strong>Address : </strong>
          {data?.shippingAddress?.details}
        </div>
        <div className="mb-2">
          <strong>City : </strong>
          {data?.shippingAddress?.city}{" "}
        </div>
        <div className="mb-2">
          <strong>Phone : </strong>
          {data?.shippingAddress?.phone}{" "}
        </div>
        <div>
          <strong>Postal Code : </strong>
          {data?.shippingAddress?.postalCode}{" "}
        </div>
      </div>
      <div className="line-order w-100 mt-3"></div>

      <div className="mb-3 rounded-3 pt-0">
        {data?.cartItems.map((item, index) => {
          return <OrdersProductItem key={index} data={item} />;
        })}
      </div>
      <div className="line-order w-100 my-3"></div>

      <div className="mb-3 rounded-3">
        <div className="mb-2">
          <strong>Tax Price : </strong>
          {data?.taxPrice}{" "}
        </div>
        <div className="mb-2">
          <strong>Shipping Price : </strong>
          {data?.shippingPrice}{" "}
        </div>
        <div className="mb-2">
          <strong>Payment Method Type : </strong>
          {data?.paymentMethodType}{" "}
        </div>
        <div className="d-flex mt-2 pt-1 justify-content-between">
          <div>
            <strong> Order State :</strong>
            <span>
              Paid : {data?.isPaid ? "Yes" : "No"} , Delivered :{" "}
              {data?.isDelivered ? "Yes" : "No"}{" "}
            </span>
          </div>
          <div className=" fs-5 ">{data?.totalOrderPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
