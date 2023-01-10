import styled from "styled-components";

export const Container = styled.div``;
export const FirstSection = styled.section`
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25rem;
  background: rgba(0,0,0,0.6);

  div {

    p {
      padding: 1rem;
      text-align: center;
      font-size: 1.125rem;
      color: #fff;
    }
  }
`;
