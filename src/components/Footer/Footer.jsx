import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/SLogo2.png";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="12" className="footer-copywright">
            <span>Copyright © {year}</span>
            <span>     </span>
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer