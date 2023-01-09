import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const MainPage = () => (
  <Container maxWidth="lg">
    <Row className="homeMain">
      <Col sm={6} className="mainLayout">
        <div className="mainHeader">
          <div className="header1">Freshly pressed,</div>
          <div className="header1">straight to</div>
          <div className="header1">your door</div>
          <p className="header2">
            At pure Flave, we're dedicated to goodness in every sip. Delicous,
            fresh jucie, just as nature intended
          </p>
          <Link to="/products">
            <button className="gotoShopBtn">
              <div>Shop</div>
            </button>
          </Link>
        </div>
      </Col>
      <Col sm={6} className="mainLayout">
        <img
          src="/images/homeImage1.jpg"
          alt="homeImage1"
          className="mainImage"
        />
      </Col>
      <Col sm={6}>
        <img
          src="/images/homeImage2.jpg"
          alt="homeImage2"
          className="aboutImage"
        />
      </Col>
      <Col sm={6}>
        <div className="aboutLayout">
          <div className="header3">About Us</div>
          <div className="header4">Bringing 100%</div>
          <div className="header4">natural juices</div>
          <div className="header4">straight to your door</div>
          <p className="header5">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);
export default MainPage;
