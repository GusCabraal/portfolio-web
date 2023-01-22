import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background: rgba(0, 0, 0, 0.6);

  h3 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;

    div {
      border: 1px solid black;
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      img {
        width: 6rem;
        margin-bottom: 1rem;
      }

      p {
        text-align: center;
      }
    }
  }
`;
