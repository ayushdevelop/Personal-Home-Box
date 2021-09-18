import styled from "styled-components";
import UserLogo from "../../images/icons-user.png";
import SearchLogo from "../../images/icons-search.png";

export const Wrapper = styled.div`
  width: 150px;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  /* div.search {
    background: url(${SearchLogo});
    width: 25px;
    height: 25px;
    background-size: cover;
    background-position: center;
  } */

  div.user {
    background: url(${UserLogo});
    width: 25px;
    height: 25px;
    background-size: cover;
    background-position: center;

    ul {
      display: none;
      list-style: none;

      :hover {
        display: block;
      }
    }
  }

  div {
    transition: width 0.5s;
    :hover {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
  }
`;
