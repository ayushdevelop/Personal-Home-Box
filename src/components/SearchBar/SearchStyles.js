import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;

  background: var(--white);
  padding: 0 10px;
  margin-top: 10px;
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 55px;
  background: rgba(137, 207, 240, 0.5);
  margin: 0 auto;
  border-radius: 40px;
  color: var(--medgrey);
  /* box-shadow: 0 0 10px #0096ff; */

  img {
    position: absolute;
    top: 14px;
    left: 15px;
    width: 30px;
  }

  input {
    font-size: 22px;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 8px 0;
    padding: 5px 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 45px;
    color: var(--darkgrey);
    font-weight: 600;

    :focus {
      outline: none;
    }
  }
`;
