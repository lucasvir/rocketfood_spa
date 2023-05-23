import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.LIGHT_100};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) =>
    open ? "translateX(0)" : "translateX(-100%)"};
  z-index: 5;

  @media only screen and (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.COLORS.DARK_100};
    text-decoration: none;
    transition: color 0.3s linear;

    @media only screen and (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.DARK_300};
    }
  }
`;
