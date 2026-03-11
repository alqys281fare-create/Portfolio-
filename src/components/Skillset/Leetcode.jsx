import React from "react";
import { Row } from "react-bootstrap";
import imgHacker from "../../assets/scoreRank.png";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading">
        <strong className="yellow">Hacker </strong>
        <strong>Rank</strong>
      </h1>
     <a
  href="https://www.hackerrank.com/profile/alqys281_fare"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src={imgHacker} alt="Hackerrank Stats" style={{ width: "100%" }} />
</a>
    </Row>
  );
};

export default Leetcode;
