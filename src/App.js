import Home from "./pages/Home";
import "./css/global.css"
import TheNav from "./components/all/TheNav";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="">  
      <TheNav/>
      <Home/>
      <ProductPage/>
    </div>
  );
}

export default App;
