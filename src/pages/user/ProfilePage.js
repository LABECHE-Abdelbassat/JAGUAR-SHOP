import React from "react";
import { Container } from "react-bootstrap";
import SideBarUser from "../../components/all/SideBarUser";
import Profile from "../../components/user/Profile";

const ProfilePage = () => {
  return (
    <Container className="position-relative">
      <div className="row">
        <div className="col-12 mb-3 col-md-3">
          <SideBarUser activeone={1} />
        </div>
        <div className="col-12 col-md-9">
          <Profile />
        </div>
      </div>
    </Container>
  );
};

export default ProfilePage;
