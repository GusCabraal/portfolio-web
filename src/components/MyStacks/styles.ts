import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 5rem 5rem;
  background: rgba(0, 0, 0, 0.6);

  h3 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 2rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    div {
      padding: 2.5rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.5rem;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

      img {
        width: 5rem;
        margin-bottom: 1rem;
      }

      p {
        text-align: center;
        color: #fff;
      }
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
