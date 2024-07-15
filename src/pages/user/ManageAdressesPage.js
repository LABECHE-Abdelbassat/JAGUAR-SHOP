import React from "react";
import { Container } from "react-bootstrap";
import SideBarUser from "../../components/all/SideBarUser";
import ManageAdresses from "../../components/user/ManageAdresses";

const ManageAdressesPage = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-12 mb-3 col-md-3">
          <SideBarUser activeone={3} />
        </div>
        <div className="col-12 col-md-9">
          <ManageAdresses />
        </div>
      </div>
    </Container>
  );
};

export default ManageAdressesPage;
