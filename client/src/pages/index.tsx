import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MainPage = () => (
  <div>
    <Row className="homeMain">
      <Col sm className="mainLayout">
        <div className="mainHeader">
          <div className="header1">Freshly pressed,</div>
          <div className="header1">straight to</div>
          <div className="header1">your door</div>
          <p className="header2">
            At pure Flave, we're dedicated to goodness in every sip. Delicous,
            fresh jucie, just as nature intended
          </p>
          <button className="gotoShopBtn">
            <div>Shop</div>
          </button>
        </div>
      </Col>
      <Col sm className="mainLayout">
        <div className="mainImage">image</div>
      </Col>
    </Row>
  </div>
);
export default MainPage;
