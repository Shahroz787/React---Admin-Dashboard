import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  left: 0;
  background-color: #212121;
  height: 100vh;
  width: 21vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;

  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }

  .toggle {
    display: none;
  }

  .brand {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .brand svg {
    color: #00ddff;
    font-size: 1.8rem;
  }

  .brand span {
    font-size: 1.9rem;
    color: #00ddff;
    font-family: "Permanent Marker", cursive;
    margin-left: -1rem;
  }

  .Links {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  .Links ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .Links ul li {
    padding: 0.7rem 1rem;
    border-radius: 0.6rem;

    &:hover {
      background-color: #00ddff;

      a {
        color: #000;
      }
    }
  }
  .Links ul li a {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 1.2rem;
  }

  .Links ul .active {
    background-color: #00ddff;

    a {
      color: #000;
    }
  }

  .logout {
    padding: 0.3rem 0.8rem;
    border-radius: 0.6rem;

   

    &:hover {
      background-color: #da0037;
    }

    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #fff;
      font-family: "Montserrat", sans-serif;
  
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;

      .toggle {
        display: block;
        color: white;
        z-index: 99;

        svg {
          font-size: 1.4rem;
          cursor: pointer;
        }
      }
      .brand {
        gap: 1.5rem;
        justify-content: flex-start;

        span {
          font-size: 1.6rem;
        }
        svg {
          font-size: 1.6rem;
        }
      }
    }
    .top > .Links,
    .logout {
      display: none;
    }
  }
`;

export const ResponsiveNav = styled.nav`
  position: fixed;
  right: -10vw;
  top: 4rem;
  z-index: 10;
  background-color: black;
  height: 43vh;
  opacity: 1;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  padding: 1rem;

  .responsive__links {
    display: flex;
    justify-content: center;
  }
  .responsive__links ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .responsive__links ul li {
    padding: 0.7rem 1rem;
    border-radius: 0.6rem;

    &:hover {
      background-color: #00ddff;

      a {
        color: #000;
      }
    }
  }

  .responsive__links ul li a {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    color: #fff;
    font-family: "Montserrat", sans-serif;
    font-size: 0.8rem;
  }

  .responsive__links ul .active {
    background-color: #00ddff;

    a {
      color: #000;
    }
  }
`;
