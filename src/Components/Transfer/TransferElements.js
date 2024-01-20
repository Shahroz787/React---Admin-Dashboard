import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  font-family: "Montserrat", sans-serif;
  ${cardStyle}
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    h2 {
      color: #00ddff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.2rem;
      font-size: 1.3rem;
    }
  }

  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }
  .transactions {
    font-size: 0.9rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__title {
        display: flex;
        gap: 0.9rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
      }

      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        margin-left: 2rem;
        &:hover {
          background-color: #00ddff;

          span {
            color: #000;
          }
        }
      }

      span {
        color: #00ddff;
        transition: 0.3s ease-in-out;
        font-size: 0.9rem;
      }
    }
  }

  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #00ddff;
    font-weight: bold;
    margin-top: 0.5rem;
    gap: 0.5rem;
    font-size: 0.8rem;

    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.1rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }



  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .transactions {
    font-size: 0.8rem;
  }

  .title{
    h2 {
      font-size: 1.4rem;
      text-align: center;
    }
  }
}
`;
