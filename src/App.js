import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import StoreContainer from "./Components/Store/Store";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>} /> 
       <Route path="/about" element={<About />} /> 
       <Route path="/store" element={<StoreContainer />} /> 
       <Route path="/cart" element={<Cart />} /> 
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
