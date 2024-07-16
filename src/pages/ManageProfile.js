import React from "react";
import { Container } from "react-bootstrap";
import SideBarUser from "../components/all/SideBarUser";

const ManageProfile = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-3">
          <SideBarUser />
        </div>
        <div className="col-9">{/* <ManageAdresses/> */}</div>
      </div>
    </Container>
  );
};

export default ManageProfile;
