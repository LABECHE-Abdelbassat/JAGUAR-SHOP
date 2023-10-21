import Home from "./pages/Home";
import "./css/global.css"
import TheNav from "./components/all/TheNav";
import ProductPage from "./pages/ProductPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <div className="">  
      <TheNav/>
      {/* <Home/> */}
      {/* <ProductPage/> */}
      <ResultsPage/>
    </div>
  );
}

export default App;
