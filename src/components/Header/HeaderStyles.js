import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(137, 207, 240, 0.8);
  padding: 0 20px;
  z-index: 10;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: var(--maxWidth);
  padding: 3px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 150px;

  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;

export const AppLogo = styled.img`
  width: 100px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
