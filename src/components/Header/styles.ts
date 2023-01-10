import styled from "styled-components";

export const Container = styled.header`
  background: transparent;
  background: rgba(255,255,255,0.2);
`;

export const Content = styled.div`
  img {
    width: 5rem;
  }
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    justify-content: space-between;

    button,
    div {
      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
    }

    button {
      font-size: 1.25rem;
      color: black;
      background: rgba(255,255,255,0.5);
      font-weight: 600;
      padding: 0 2rem;
      border-radius: 0.5rem;
      margin: 0 2rem;
      border: 0;
    }

    div {
      display: flex;
      align-items: center;

      a {
        img {
          width: 2.25rem;
          margin: 0 2rem;
          cursor: pointer;
        }
      }
    }
  }
`;
