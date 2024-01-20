import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic {
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    font-family: "Montserrat", sans-serif;
  

    &:hover {
      background-color: #00ddff;
      color: #000;
      cursor: pointer;

      svg {
        color: #00ddff;
      }
    }

    .logo {
      background-color: #000;
      padding: 1.5rem;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 1.5rem;
      }
    }
  }




  @media screen and (min-width: 280px) and (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) ;

    .analytic {
      &:nth-of-type(3),
      &:nth-of-type(4) {
        flex-direction: row-reverse;
      }
    }
  }
`;
