import React from "react";
import Header from "../Component/Shared/Header/Header";
import Footer from "../Component/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightCon from "../Component/Home/RightCon/RightCon";
import LeftCon from "../Component/Home/LeftCon/LeftCon";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row>
          <Col lg={3}>
            <LeftCon></LeftCon>
          </Col>
          <Col lg={6}>
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

export default Main;
