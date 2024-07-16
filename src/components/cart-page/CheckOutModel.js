import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import {
  useCheckoutSessionMutation,
  useCreateCashOrderMutation,
} from "../../reduxQuery/APIs/orderApi";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../all/ErrorMessage";
import { useGetAllUserAddressesQuery } from "../../reduxQuery/APIs/addressApi";

function CheckOutModel(props) {
  const navigation = useNavigate();
  const [address, setAddress] = useState("");
  const [method, setmethod] = useState("");
  const { data, isLoading, error, isError } = useGetAllUserAddressesQuery();

  const [
    createCashOrder,
    {
      isLoading: cashOrderLoading,
      isError: cashOrderIsError,
      isSuccess: cashOrderIsSuccess,
      error: cashOrderErrPor,
    },
  ] = useCreateCashOrderMutation();
  const [
    triggerCheckoutSession,
    {
      data: checkoutSession,
      isLoading: checkoutSessionLoading,
      isError: checkoutSessionIsError,
      isSuccess: checkoutSessionIsSuccess,
      error: checkoutSessionError,
    },
  ] = useCheckoutSessionMutation();

  async function hundleClickCheckOut() {
    let addressObj;
    addressObj = data?.data?.filter((item, index) => {
      return item?.alias === address;
    });

    const checkOutObj = {
      shippingAddress: addressObj[0],
    };
    if (method === "cash") {
      await createCashOrder({ checkOutObj, id: props.id });
    } else if (method === "online") {
      triggerCheckoutSession({ checkOutObj, id: props.id });
    }
  }
  useEffect(() => {
    if (checkoutSessionIsSuccess) {
      console.log(checkoutSession);
      window.location.href = checkoutSession?.session?.url;
    }
  }, [checkoutSession, checkoutSessionIsSuccess]);

  useEffect(() => {
    if (cashOrderIsSuccess) {
      props.onHide();
      navigation("/user/orders", { preventScrollReset: true, replace: true });
    }
  }, [cashOrderIsSuccess]);

  function hundleClickChange(e) {
    setAddress(e.target.value);
  }
  function hundleClickChangeMethod(e) {
    setmethod(e.target.value);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div style={{ direction: "rtl" }}>
        {/* {cashOrderIsError ? <ErrorMessage error={cashOrderError} /> : ""} */}
      </div>
      <div style={{ direction: "rtl" }}>
        {isError ? <ErrorMessage error={error} /> : ""}
      </div>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="color-main mb-2 fs-5 fw-semibold">
            Select Payment Method :{" "}
          </div>
          <Form>
            <Form.Check>
              <Form.Check.Input
                onChange={hundleClickChangeMethod}
                value={"cash"}
                defaultChecked={method === "cash"}
                name={"method"}
                id={"btnradio-cash"}
                type={"radio"}
              />
              <Form.Check.Label htmlFor={"btnradio-cash"}>
                Cash On Delivery
              </Form.Check.Label>
            </Form.Check>
            <Form.Check>
              <Form.Check.Input
                onChange={hundleClickChangeMethod}
                value={"online"}
                defaultChecked={method === "online"}
                name={"method"}
                id={"btnradio-online"}
                type={"radio"}
              />
              <Form.Check.Label htmlFor={"btnradio-online"}>
                Online Payment -Stipe-
              </Form.Check.Label>
            </Form.Check>
          </Form>
        </div>
        <div className="line my-3"></div>
        <div className="color-main mb-2 fs-5 fw-semibold">
          Select Address :{" "}
        </div>

        <Form>
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
                data?.data?.map((item, index) => {
                  if (index === 0) {
                    return (
                      <Form.Check key={index}>
                        <Form.Check.Input
                          onChange={hundleClickChange}
                          value={item?.alias}
                          name={"address"}
                          defaultChecked={address === item?.alias}
                          id={"btnradio" + index}
                          type={"radio"}
                        />
                        <Form.Check.Label htmlFor={"btnradio" + index}>
                          {item.alias}
                        </Form.Check.Label>
                      </Form.Check>
                    );
                  }
                  return (
                    <Form.Check key={index}>
                      <Form.Check.Input
                        onChange={hundleClickChange}
                        value={item?.alias}
                        name={"address"}
                        id={"btnradio" + index}
                        type={"radio"}
                      />
                      <Form.Check.Label htmlFor={"btnradio" + index}>
                        {item.alias}
                      </Form.Check.Label>
                    </Form.Check>
                  );
                })
              ) : (
                <h6 className="fw-semibold text-black">
                  you don't have any address to select please add address
                </h6>
              )}
              <div>
                <Link
                  to={"/user/addresses"}
                  className="btn btn-success mt-2 color-main text-white"
                  style={{ textDecoration: "none" }}
                >
                  New Address
                </Link>
              </div>
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          disabled={address.length < 1 || method.length < 1}
          variant="success"
          onClick={hundleClickCheckOut}
        >
          Check Out
          {cashOrderLoading ? (
            <Spinner size="sm" className="ms-3"></Spinner>
          ) : (
            ""
          )}
          {checkoutSessionLoading ? (
            <Spinner size="sm" className="ms-3"></Spinner>
          ) : (
            ""
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CheckOutModel;
