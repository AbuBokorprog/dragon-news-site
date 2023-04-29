import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Shared/Header/Header";
import Footer from "../../Component/Shared/Footer/Footer";
import RightCon from "../../Component/Home/RightCon/RightCon";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightCon></RightCon>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
