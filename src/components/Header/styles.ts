import styled from "styled-components";

export const Container = styled.header`
  background: transparent;
  background: rgba(255, 255, 255, 0.2);
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

      a {
        img {
          width: 2.25rem;
          margin: 0 2rem;
          cursor: pointer;
          transition: filter 0.2s;
          &:hover {
            filter: brightness(0.9);
          }
        }
      }
  }
`;
