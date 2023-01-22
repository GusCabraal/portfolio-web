import styled from "styled-components";

export const Container = styled.section`
  /* background: var(--red); */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  background: rgba(0,0,0,0.6);

  div {
    h1 {
      text-align: center;
      color: #fff;
      margin-bottom: 2rem;
      font-size: 2rem;

    }

    p {
      padding: 1rem;
      text-align: center;
      font-size: 1.125rem;
      color: #fff;
    }
  }
`;
