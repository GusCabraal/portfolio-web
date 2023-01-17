import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 5rem;
  margin-block: 3rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: space-between;

    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: 3rem;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    img {
      max-width: 45rem;
      object-fit: cover;
      margin-bottom: 2rem;
    }

    p {
      text-align: justify;
    }
    button {
      background: rgba(255, 255, 255, 0.5);
      margin-top: 2rem;
      padding: 1rem 2rem;
      border: 0;
      border-radius: 0.5rem;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.8);
      }
      &:disabled {
        visibility: hidden;
      }
    }
    a {
      text-decoration: none;
      font-weight: 500;
      color: black;
    }
  }

  .change-project {
    cursor: pointer;
    margin-inline: 8rem;
  }
`;
