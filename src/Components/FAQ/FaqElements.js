import styled from "styled-components";
import { cardStyle } from "../ReusableStyle";

export const Section = styled.section`
  ${cardStyle}

  .title {
    h2 {
      color: #00ddff;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      font-size: 1.3rem;
    }
  }

  .faqs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .faq {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      font-size: 0.9rem;
      font-family: "Montserrat", sans-serif;

      &:nth-of-type(2) {
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }

    .info {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    svg {
      font-size: 1.4rem;
    }
  }



  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .title {
      h2{
        font-size: 1.2rem;
        text-align: center;
      }
    }
   svg {
     font-size: 2rem !important;
   }
  }
`;
