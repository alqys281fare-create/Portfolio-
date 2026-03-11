import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm <span className="yellow">Mohamed Ragab Ali</span> from{" "}
              <span className="yellow">Mansoura, Egypt.</span>
              <br />
              <br />
              Graduated{" "}
              <span className="yellow">Mansoura University (2022)</span> with
              Very Good grade (82.82%), ranked 6th in IT Department.
              <br />
              <br />
              Currently pursuing{" "}
              <span className="yellow">Master's in Information Technology</span>
              , researching automated pancreatic tumor volume measurement.
              <br />
              <br />
              Worked as{" "}
              <span className="yellow">
                Teaching Assistant at FCIS Tanta University (2023-2024)
              </span>
              , mentoring students in programming and web development.
              <br />
              <br />
              Completed{" "}
              <span className="yellow">
                9-month ITI postgraduate diploma
              </span>{" "}
              in Open-Source Application Development.
              <br />
              <br />
              <b className="yellow">Frontend Developer</b> skilled in{" "}
              <span className="yellow">React.js, Next.js, and Vue.js.</span>
              <br />
              <br />
              Experienced with{" "}
              <span className="yellow">
                {" "}
                Laravel, RESTful APIs, SQL , and MongoDB.
              </span>
              <br />
              <br />
              Passionate about{" "}
              <span className="yellow">
                clean code, performance optimization, and AI/ML applications.
              </span>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mohamedragab2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-ragab-ab56961a4/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/alqys281_fare"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="instagram"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
