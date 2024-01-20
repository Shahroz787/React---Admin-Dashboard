import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  ${cardStyle}
  font-family:  "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image {
    max-height: 8rem;
    overflow: hidden;
    border-radius: 20rem;
    background-color: #000;
    img {
      width: 8rem;
      height: 8rem;
      object-fit: cover;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  .title {
    text-align: center;
    h2,
    h5 {
      color: #00ddff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.2rem;
    }
    h5 {
      letter-spacing: 0.1rem;
      font-size: 1rem;
    }

    h2 {
      font-size: 1.6rem;
    }
  }

  .info {
    display: flex;
    gap: 1.1rem;
    .container {
      text-align: center;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title {
      h2 {
        font-size: 1.6rem;
      }
      h5 {
        font-size: 1rem;
      }
    }
    .info {
      gap: 4rem;
      margin-top: 1.3rem;
      .container {
        font-size: 1rem;
      }
    }
  }
`;
