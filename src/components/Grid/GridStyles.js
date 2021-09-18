import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;

  h1 {
    color: #0096ff;
    font-weight: 600;
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  margin: 30px 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
`;
