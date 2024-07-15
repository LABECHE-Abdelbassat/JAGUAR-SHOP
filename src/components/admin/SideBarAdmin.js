import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { Button, ListGroup, Nav, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./css/sidebar.css";
import logo from "../../images/logo.png";
import { useDeleteLoggedUserMutation } from "../../reduxQuery/APIs/loggedUserApi";
import { ToastContainer, toast } from "react-toastify";
const SideBarAdmin = () => {
  const location = useLocation();
  const [
    deleteAccount,
    {
      isSuccess: deleteSuccess,
      isLoading: deleteLoading,
      isError: deleteIsError,
      error: deleteError,
    },
  ] = useDeleteLoggedUserMutation();

  const navigation = useNavigate();
  useEffect(() => {}, [location]);
  async function handleClickLogout() {
    await deleteAccount();
  }
  useEffect(() => {
    if (deleteSuccess) {
      localStorage.removeItem("token");
      navigation("/login", {
        replace: true,
        state: { message: "Log Out Success" },
      });
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (deleteIsError) {
      toast.error(
        deleteError?.status === 400
          ? deleteError?.data?.errors[0]?.msg
          : deleteError?.data?.message || "Network Error!"
      );
    }
  }, [deleteIsError, deleteError]);
  return (
    <div className="sidebar-admin">
      <ToastContainer />
      <div className="logo-side">
        <img className="img-fluid" src={logo}></img>
      </div>
      <ul>
        <li
          className={
            location?.pathname?.startsWith("/admin/product") ||
            location.pathname.startsWith("/admin/addproduct") ||
            location.pathname.startsWith("/admin/updateproduct")
              ? "active"
              : ""
          }
        >
          <Link to={"/admin/products"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="lets-icons:shop" />
            <div className="side-title">Products</div>
          </Link>
        </li>
        <li
          className={
            location.pathname.startsWith("/admin/orders") ? "active" : ""
          }
        >
          <Link to={"/admin/orders"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="solar:delivery-bold" />
            <div className="side-title">Orders</div>
          </Link>
        </li>
        <li className={location.pathname == "/admin/coupon" ? "active" : ""}>
          <Link to={"/admin/coupon"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="mingcute:coupon-fill" />
            <div className="side-title">Coupon</div>
          </Link>
        </li>
        <li
          className={
            location.pathname.startsWith("/admin/categories") ? "active" : ""
          }
        >
          <Link to={"/admin/categories"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="bxs:category" />
            <div className="side-title">Categories</div>
          </Link>
        </li>
        <li
          className={
            location.pathname.startsWith("/admin/subcategories") ? "active" : ""
          }
        >
          <Link to={"/admin/subcategories"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="solar:layers-bold" />
            <div className="side-title">Sub Categories</div>
          </Link>
        </li>
        <li
          className={
            location.pathname.startsWith("/admin/brands") ? "active" : ""
          }
        >
          <Link to={"/admin/brands"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="subway:mark" />
            <div className="side-title">Brands</div>
          </Link>
        </li>

        <li
          className={
            location.pathname.startsWith("/admin/users") ? "active" : ""
          }
        >
          <Link to={"/admin/users"} style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="fa-solid:users-cog" />
            <div className="side-title">Manage Users</div>
          </Link>
        </li>
        <li onClick={handleClickLogout}>
          <div className="logout" style={{ textDecoration: "none" }}>
            <Icon className="side-icon" icon="ri:logout-box-r-fill" />
            <div className="side-title">Log Out</div>
            {deleteLoading ? (
              <Spinner size="sm" className="ms-3"></Spinner>
            ) : (
              ""
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideBarAdmin;
