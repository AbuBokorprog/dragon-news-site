import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "./QZone/QZone";
import bg from "../../../..//src/assets/bg.png";

const RightCon = () => {
  return (
    <div>
      <h3 className="fw-bold">Login With</h3>
      <Button variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>{" "}
      <br />
      <Button className="my-2" variant="outline-secondary">
        <FaGithub /> Login With GitHub
      </Button>
      <div className="my-2">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="position-relative">
        <img src={bg} alt="" />
        <div className="px-5 text-white position-absolute top-0">
          <h3 className="my-5">Create an Amazing Newspaper</h3>
          <p className="my-5">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button className="text-center" variant="danger">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightCon;
