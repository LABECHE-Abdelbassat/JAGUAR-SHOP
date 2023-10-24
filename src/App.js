import Home from "./pages/Home";
import "./css/global.css"
import TheNav from "./components/all/TheNav";
import ProductPage from "./pages/ProductPage";
import ResultsPage from "./pages/ResultsPage";
import CartPage from "./pages/CartPage";
import SideBarUser from "./components/all/SideBarUser";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import ManageProfile from "./pages/ManageProfile";
import WhishListPage from "./pages/WhishListPage";
function App() {
  
  return (
    <div className="">  
      <TheNav/>
      {/* <Home/> */}
      {/* <ProductPage/> */}
      {/* <ResultsPage/> */}
      {/* <CartPage/> */}
      <ManageProfile/>
      {/* <WhishListPage/> */}
    </div>
  );
}

export default App;
