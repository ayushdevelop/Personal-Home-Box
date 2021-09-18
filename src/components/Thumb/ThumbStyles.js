import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 0.4s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  box-shadow: 0 0 10px #0096ff;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
