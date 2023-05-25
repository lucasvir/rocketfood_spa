import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.DARK_100};
  border-right: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
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

  span {
    font: 300 2rem/140% 'Poppins';
  }


  >div {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  @media only screen and (max-width: 576px) {
    width: 60%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-decoration: none;
    transition: color 0.3s linear;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

    @media only screen and (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.COLORS.DARK_300};
    }
  }
`;
