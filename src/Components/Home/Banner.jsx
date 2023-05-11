import React from "react";
import { Container } from "react-bootstrap";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Banner = () => {
  return (
    <div
      className="banner d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(45deg, #1b2735, #3f4c6b)",
        height: "40vh",
      }}
    >
      <Container className="text-center">
        <h1 className="mb-4 text-white fs-1">Get Our Latest Album</h1>
        <div>
          <AiOutlinePlayCircle size={80} color="white" />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
