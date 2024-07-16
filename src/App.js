import AdminAddCategoryPage from "./pages/admin/AdminAddCategoryPage";
import AdminAddBrandPage from "./pages/admin/AdminAddBrandPage";
import AdminAddProductPage from "./pages/admin/AdminAddProductPage";

import Home from "./pages/Home";
import "./css/global.css";
import ProductPage from "./pages/ProductPage";
import ResultsPage from "./pages/ResultsPage";
import CartPage from "./pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WhishListPage from "./pages/WhishListPage";
import ProfilePage from "./pages/user/ProfilePage";
import MyOrdersPage from "./pages/user/MyOrdersPage";
import AdminCouponPage from "./pages/admin/AdminCouponPage";
import AdminManageOrdersPage from "./pages/admin/AdminManageOrdersPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminAddSubCategoryPage from "./pages/admin/AdminAddSubCategoryPage";
import AdminProductPage from "./pages/admin/AdminProductsPage";
import ManageAdressesPage from "./pages/user/ManageAdressesPage";
import { useState } from "react";
import AdminUpdateProductPage from "./pages/admin/AdminUpdateProductPage";
import { AdminPage } from "./pages/admin/AdminPage";
import RootPage from "./pages/RootPage";
import AdminUpdateCategoryPage from "./pages/admin/AdminUpdateCategoryPage";
import AdminManageUsersPage from "./pages/admin/AdminManageUsersPage";
import AdminSpecificUserPage from "./pages/admin/AdminSpecificUserPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AdminUpdateBrandPage from "./pages/admin/AdminUpdateBrandPage";
import AdminUpdateSubcategoryPage from "./pages/admin/AdminUpdateSubcategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { ToastContainer } from "react-toastify";

function App() {
  const [adminsearch, setadminSearch] = useState("");
  function setadminsearch(search) {
    setadminSearch(search);
  }
  // TODO : bottom navigation . toastify
  return (
    <div>
      <ToastContainer />
      <div className="app-style">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootPage />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="reset-password" element={<ResetPasswordPage />} />
              <Route path="sign-up" element={<SignUpPage />} />
              <Route path="result-page/:keyword?" element={<ResultsPage />} />
              <Route path="products/:id" element={<ProductPage />} />
              {/* paymentmethod */}
              {/* add edit address */}
              <Route
                path="cart"
                element={
                  <ProtectedRoute roles={["user"]}>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="wishlist"
                element={
                  <ProtectedRoute roles={["user"]}>
                    <WhishListPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="user/orders"
                element={
                  <ProtectedRoute roles={["user"]}>
                    <MyOrdersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="user/addresses"
                element={
                  <ProtectedRoute roles={["user"]}>
                    <ManageAdressesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="user/profile"
                element={
                  <ProtectedRoute roles={["user"]}>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route
              path="/admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminPage
                    setadminsearch={setadminsearch}
                    adminsearch={adminsearch}
                  />
                </ProtectedRoute>
              }
            >
              <Route
                path="products"
                element={<AdminProductPage keyword={adminsearch} />}
              />
              <Route
                path="updateproduct/:id"
                element={<AdminUpdateProductPage />}
              />
              <Route path="orders" element={<AdminManageOrdersPage />} />
              <Route path="orders/:id" element={<AdminOrderPage />} />
              <Route path="coupon" element={<AdminCouponPage />} />
              <Route path="brands" element={<AdminAddBrandPage />} />
              <Route path="brands/:id" element={<AdminUpdateBrandPage />} />
              <Route path="categories" element={<AdminAddCategoryPage />} />
              <Route
                path="categories/:id"
                element={<AdminUpdateCategoryPage />}
              />
              <Route
                path="subcategories"
                element={<AdminAddSubCategoryPage />}
              />
              <Route
                path="subcategories/:id"
                element={<AdminUpdateSubcategoryPage />}
              />
              <Route path="addproduct" element={<AdminAddProductPage />} />
              <Route path="users" element={<AdminManageUsersPage />} />
              <Route path="users/:id" element={<AdminSpecificUserPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
