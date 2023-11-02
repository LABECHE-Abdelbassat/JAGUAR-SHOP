import AdminAddCategoryPage from './pages/admin/AdminAddCategoryPage';
import AdminAddBrandPage from "./pages/admin/AdminAddBrandPage";
import AdminAddProductPage from "./pages/admin/AdminAddProductPage";


import Home from "./pages/Home";
import "./css/global.css"
import TheNav from "./components/all/TheNav";
import ProductPage from "./pages/ProductPage";
import ResultsPage from "./pages/ResultsPage";
import CartPage from "./pages/CartPage";
import SideBarUser from "./components/all/SideBarUser";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ManageProfile from "./pages/ManageProfile";
import WhishListPage from "./pages/WhishListPage";
import Footer from "./components/all/Footer";
import ProfilePage from "./pages/user/ProfilePage";
import MyOrdersPage from "./pages/user/MyOrdersPage";
import AdminCouponPage from "./pages/admin/AdminCouponPage";
import AdminManageOrdersPage from "./pages/admin/AdminManageOrdersPage";
import AdminOrderPage from "./pages/admin/AdminOrderPage";
import ManageAdresses from "./components/user/ManageAdresses";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AdminAddSubCategoryPage from './pages/admin/AdminAddSubCategoryPage';
import AdminProductPage from './pages/admin/AdminProductsPage';
import ManageAdressesPage from './pages/user/ManageAdressesPage';


function App() {
  
  return (
    <div className="">  
      <TheNav/>
      <div style={{minHeight:"calc(100vh - 284px)"}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/sign-up" element={<SignUpPage/>}/>
          <Route path="/result-page" element={<ResultsPage/>}/>
          <Route path="/products/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          {/* paymentmethod */}
          <Route path="/wishlist" element={<WhishListPage/>}/>

          <Route path="/admin/products" element={<AdminProductPage/>}/>
          <Route path="/admin/orders" element={<AdminManageOrdersPage/>}/>
          <Route path="/admin/orders/:id" element={<AdminOrderPage/>}/>
          <Route path="/admin/coupon" element={<AdminCouponPage/>}/>
          <Route path="/admin/addbrand" element={<AdminAddBrandPage/>}/>
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage/>}/>
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage/>}/>
          <Route path="/admin/addproduct" element={<AdminAddProductPage/>}/>

          <Route path="/user/orders" element={<MyOrdersPage/>}/>
          <Route path="/user/addresses" element={<ManageAdressesPage/>}/>
          {/* add edit address */}
          <Route path="/user/profile" element={<ProfilePage/>}/>
          
        </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
      
      
      
      
      
    </div>
  );
}

export default App;
