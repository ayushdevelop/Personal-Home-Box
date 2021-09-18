import { Wrapper, Content, Link } from "./BreadCrumb";
import React from "react";
// import { Link } from "react-router-dom";

const BreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Go Back</span>
        </Link>

        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

export default BreadCrumb;
