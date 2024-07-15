import React from "react";
import { ListGroup, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const SideBarUser = ({ activeone }) => {
  return (
    <div>
      <ListGroup variant="success" className="">
        {activeone == 1 ? (
          <Link to={"/user/profile"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex btn align-items-center gap-2"
              active
              action
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="iconamoon:profile"
              />
              <div className="fw-semibold fs-6">Profile</div>
            </ListGroup.Item>
          </Link>
        ) : (
          <Link to={"/user/profile"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex align-items-center gap-2"
              action
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="iconamoon:profile"
              />
              <div className="fw-semibold fs-6">Profile</div>
            </ListGroup.Item>
          </Link>
        )}
        {activeone == 2 ? (
          <Link to={"/user/orders"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex btn align-items-center gap-2"
              action
              active
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="material-symbols:orders"
              />
              <div className="fw-semibold fs-6">Orders</div>
            </ListGroup.Item>
          </Link>
        ) : (
          <Link to={"/user/orders"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex btn align-items-center gap-2"
              action
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="material-symbols:orders"
              />
              <div className="fw-semibold fs-6">Orders</div>
            </ListGroup.Item>
          </Link>
        )}
        {activeone == 3 ? (
          <Link to={"/user/addresses"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex btn align-items-center gap-2"
              active
              action
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="mdi:address-marker-outline"
              />
              <div className="fw-semibold fs-6">Addresses</div>
            </ListGroup.Item>
          </Link>
        ) : (
          <Link to={"/user/addresses"} style={{ textDecoration: "none" }}>
            <ListGroup.Item
              className="d-flex btn align-items-center gap-2"
              action
              variant="success"
            >
              <Icon
                className="side-icon"
                fontSize={27}
                icon="mdi:address-marker-outline"
              />
              <div className="fw-semibold fs-6">Addresses</div>
            </ListGroup.Item>
          </Link>
        )}
      </ListGroup>
    </div>
  );
};

export default SideBarUser;
