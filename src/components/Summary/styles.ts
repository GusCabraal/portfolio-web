import styled from "styled-components";

export const Container = styled.header``;
export const FirstSection = styled.section`
  /* background: var(--red); */
  display: flex;
  align-items: center;
  border: 1px solid black;
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
    }

    button {
      background: rgba(255, 255, 255, 0.5);
      margin-top: 2rem;
      padding: 1rem 2rem;
      border: 0;
      font-weight: 500;
      border-radius: 0.5rem;
      font-size: 1.25rem;
      color: black;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 100%;
    /* border: 2px solid black; */
    box-shadow: 2px 2px black;
  }
`;
export const SecondSection = styled.section`
  /* background: var(--red); */
`;
