import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";
import Error from "./components/pages/Error/Error";
import Layout from "./Layout/Layout";
import ROUTES from "./Routes";
import Product from "./components/pages/Product/Product";
import Cart from "./components/pages/Cart/Cart";



import "./App.scss";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.SHOP} element={<Shop />} />
            <Route path={ROUTES.ERROR} element={<Error/>}/>
            <Route path={ROUTES.CART} element={<Cart/>}/>
            <Route path='product/:id' element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
