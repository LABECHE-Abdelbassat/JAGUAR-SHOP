import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useGetAllOrdersQuery } from "../../reduxQuery/APIs/orderApi";
import ErrorMessage from "./../all/ErrorMessage";
import { Spinner } from "react-bootstrap";

const AdminManageOrders = () => {
  const { data, isLoading, isError, error } = useGetAllOrdersQuery();
  return (
    <div className="position-relative">
      <div style={{ direction: "rtl" }}>
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <h2 className="color-main fw-semibold">Manage All Orders</h2>
      {isLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : data?.data?.length < 1 ? (
        <div className="text-main text-center m-0 mb-4 p-0 fs-5">
          NO ORDER FOUND
        </div>
      ) : (
        <div>
          {data?.data?.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/admin/orders/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <Card className="mt-3">
                  <Card.Body>
                    <div className="mb-2">
                      <strong>Order N: </strong>
                      {data?.data?.length - index}
                    </div>
                    <div>
                      <strong>From : </strong>
                      {item?.user?.name} , <strong>{item?.user?.email}</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div>
                        <strong>Delivred : </strong>
                        {item.isDelivered ? "Yes" : "No"}
                        <strong> Payed : </strong> {item.isPaid ? "Yes" : "No"}{" "}
                        <strong>Payment Method : </strong>
                        {item?.paymentMethodType}
                      </div>
                      <strong>{item.totalOrderPrice}</strong>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminManageOrders;
