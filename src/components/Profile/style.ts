import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25rem;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2rem;
      text-align: left;
      margin-bottom: 1rem;
    }
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 100%;
    box-shadow: 2px 2px black;
  }
`;
