import styled from "styled-components";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 2s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: #fff;
  overflow: hidden;

  p {
    font-weight: 800;
    margin: 0;
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    width: 40px;
    height: 40px;
    color: #000;
    padding: 10px 5px;
    text-align: center;
    background: white;
    border-radius: 20px;
    font-weight: 800;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }

  h3 {
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;

export const Thumbnail = styled.div`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;
