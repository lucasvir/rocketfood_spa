import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 4rem;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    header {
      display: none;
    }
  }

  a {
    font: ${({ theme }) => theme.FONTS.POPPINS_100_M};
    text-align: center;
  }

  #logo {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    margin-top: 15.8rem;
    margin-bottom: 7.3rem;

    > img {
      width: 4.4rem;
      height: 4.4rem;
    }

    > h1 {
      font: 700 3.7rem/4.4rem "Roboto";
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;

    > form {
      max-width: 47.6rem;

      background-color: ${({ theme }) => theme.COLORS.DARK_700};
      border-radius: 0.8rem;

      padding: 6.4rem;

      header {
        display: initial;
        font: ${({ theme }) => theme.FONTS.POPPINS_400_M};

        margin-bottom: 3.2rem;
        text-align: center;
      }
    }

    #logo {
      width: 50%;
    }
  }
`;
