import React from "react";
import { Link } from "react-router-dom";

import RMDBLogo from "../../images/logo3.png";

import Navbar from "../Navbar";

import { Wrapper, Content, LogoImg, AppLogo } from "./HeaderStyles";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={RMDBLogo} alt="rmdb_logo"></LogoImg>
        </Link>
        {/* <AppLogo src={TMDBLogo} alt="tmdb_logo"></AppLogo> */}

        {/* <Navbar /> */}
      </Content>
    </Wrapper>
  );
};

export default Header;
