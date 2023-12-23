import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";
import Order from "./components/order/Order";
import { useRef } from "react";
function App() {
  const categoryRef = useRef(null);
  const aboutRef = useRef(null);
  

  return (
    <BrowserRouter>
      <AppContext>
        <Header categoryRef={categoryRef} aboutRef={aboutRef}/>
        <Routes>
          <Route path="/" element={<Home categoryRef={categoryRef} />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/order" element={<Order/>} />
        </Routes>
        <Newsletter />
        <Footer aboutRef={aboutRef}/>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
