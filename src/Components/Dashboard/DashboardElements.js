import styled from "styled-components";

export const SectionContainer = styled.section`
  margin-left: 20vw;
  padding: 2rem;
  height: 100%;

  .grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;

    .row__one {
      display: flex;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }

    .row__two {
      display: flex;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    .grid {
      .row__one,
      .row__two {
        display: grid;
        grid-template-columns: 1fr;
      }
    }
  }
`;
