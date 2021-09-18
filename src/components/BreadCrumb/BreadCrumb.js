import styled from "styled-components";

import { Link as Alink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;

  background: rgba(0, 150, 255, 0.6);
  color: #fff;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 20px;

  span {
    padding: 5px;
    color: #fff;
    font-weight: 800;
    letter-spacing: 1.5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Link = styled(Alink)`
  text-decoration: none;
  
`;
