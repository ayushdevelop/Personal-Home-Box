import React, { useRef } from "react";

import { Wrapper, Content } from "./NavbarStyles";

const Navbar = ({ image, user, search }) => {
  return (
    <>
      <Wrapper>
        <Content>
          {/* <div onClick={searchbar} className="search">
            { <img onClick={search} src={image}></img> }
          </div> */}
          <div user={user} className="user">
            {/* <img src={user}></img> */}
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export { Navbar as default };
