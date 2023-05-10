import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-center text-md-start">
              Ecommerce Website &copy; 2023
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
            <a href="https://www.facebook.com/" className="me-3">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/" className="me-3">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
