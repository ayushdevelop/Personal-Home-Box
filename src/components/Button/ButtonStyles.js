import styled from "styled-components";

export const Wrapper = styled.div`
  display: block;
  background: #0096ff;
  width: 20%;
  color: var(--white);
  text-align: center;
  min-width: 200px;
  height: 60px;
  border-radius: 40px;
  border: 0;
  transition: all 0.3s;
  margin: 20px auto;
  font-size: 24px;
  padding: 13px;
  font-weight: 400;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
