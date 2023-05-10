import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
