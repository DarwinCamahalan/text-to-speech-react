import React from "react";
import "../styles/style.css";
import Tilt from "react-vanilla-tilt";
import { Container, Col, Row, CardImg, NavLink } from "reactstrap";
export default function Products() {
  const products = [
    {
      title: "Text to Speech",
      num: "2077",
      img: "/assets/image/robot2.png",
      to: "/text-to-speech",
    },
    {
      title: "Voice to Text",
      num: "2077",
      img: "/assets/image/robot5.png",
      to: "/being-built",
    },
    {
      title: "Voice Recognition",
      num: "2077",
      img: "/assets/image/robot7.png",
      to: "/being-built",
    },
    {
      title: "Face Recognition",
      num: "2077",
      img: "/assets/image/robot3.png",
      to: "/face-recognition",
    },
  ];
  return (
    <div className="pb-5 m-5 pt-3 prod">
      <Container className="mx-auto m-0 p-0 text-center">
        <h1 style={{ fontFamily: "VT323", color: "#6dd5ed" }}>
          More <span>Products</span>
          <i style={{ fontSize: "20px" }} className="mx-2 fas fa-robot"></i>
        </h1>
        <Row className="m-0 p-0">
          {products.map((products, index) => (
            <Col key={index} lg="3">
              <Tilt className="tilt p-0 m-0">
                <NavLink href={products.to}>
                  <div className="card2">
                    <CardImg src={products.img} className="robots" />
                  </div>
                  <p
                    className="probot pt-3"
                    style={{
                      fontFamily: "VT323",
                      color: "#6dd5ed",
                      fontSize: "25px",
                    }}
                  >
                    {products.title} <span>{products.num}</span>
                  </p>
                </NavLink>
              </Tilt>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
