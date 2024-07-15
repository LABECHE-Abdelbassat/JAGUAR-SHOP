import React from "react";
import { Container } from "react-bootstrap";
import SideBarUser from "../../components/all/SideBarUser";
import MyOrders from "../../components/user/MyOrders";

const MyOrdersPage = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 mb-3 col-md-3">
          <SideBarUser activeone={2} />
        </div>
        <div className="col-12 col-md-9">
          <MyOrders />
        </div>
      </div>
    </Container>
  );
};

export default MyOrdersPage;
