import React, { useEffect } from "react";
import OrdersProductItem from "./OrdersProductItem";
import OrderItem from "./OrderItem";
import { useGetAllOrdersQuery } from "../../reduxQuery/APIs/orderApi";
import ErrorMessage from "../all/ErrorMessage";
import { Spinner } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const MyOrders = () => {
  const { data, isError, error, isLoading } = useGetAllOrdersQuery();
  console.log(data);
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
  return (
    <div className="postion-relative">
      <ToastContainer />
      {isLoading ? (
        <div className="text-center">
          <Spinner
            size="lg"
            variant="success"
            className="mt-4 align-self-center"
          ></Spinner>
        </div>
      ) : (
        <div>
          {data?.data?.length > 0 ? (
            data?.data
              // ?.sort((a, b) => a.updatedAt.localeCompare(b.updatedAt))
              ?.map((item, index) => {
                return (
                  <OrderItem
                    data={item}
                    size={data?.data?.length}
                    index={index}
                    key={index}
                  />
                );
              })
          ) : (
            <div className="text-main text-center m-0 mb-4 p-0 fs-5">
              NO ORDER FOUND
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
