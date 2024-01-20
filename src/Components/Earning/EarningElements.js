import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  padding: 2rem 0 0 0;

  .top {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.2rem;
      font-family: "Montserrat", sans-serif;

      h1 {
        font-size: 1.9rem;
      }

      h5 {
        font-size: 1.2rem;
      }

      .growth {
        background-color: #d7e41e1d;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: #00ddff;
          span {
            color: #000;
          }
        }

        span {
          color: #00ddff;
        }
      }
    }
  }

  .charts {
    height: 70%;

    .recharts-default-tooltip {
      background-color: #000 !important;
      border-color: #000 !important;
    }
  }
`;
