import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./Components/About/About";
import StoreContainer from "./Components/Store/Store";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductPage from "./Components/Store/ProductPage";
import Login from "./Components/Login/Login";
import { useContext } from "react";
import { Store } from "./store/context";

function App() {
  const { loggedIn } = useContext(Store);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {loggedIn && (
            <>
              <Route path="/store" element={<StoreContainer />} />
              <Route path="/store/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Cart />} />{" "}
            </>
          )}
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
