import styled from "styled-components";

export const Container = styled.div`
  min-width: 21rem;
  width: 30%;

  padding: 0 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_300};

  border-radius: 0.8rem;

  text-align: center;
  font: ${({ theme }) => theme.FONTS.POPPINS_100_M};

  > button {
    width: 2.4rem;
    margin-top: 1.2rem;

    display: flex;
    align-self: flex-end;
    /* left: 7rem; */
    /* position: relative; */
    z-index: 4;

    background-color: transparent;
    border: none;
    img {
      z-index: 10;
      margin-top: 1.2rem;
    }

    #edit_icon {
      bottom: 7rem;
    }
  }

  #description_card {
    display: none;
  }

  #card_controls {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #add_button {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  > img {
    width: 8.8rem;
    cursor: pointer;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p:first-child {
      margin-top: 1.2rem;
    }

    span {
      margin-top: 1.2rem;
      margin-bottom: 4.2rem;

      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
    }
  }

  @media only screen and (min-width: ${({theme}) => theme.QUERYS.DESKTOP_100}) {
    padding: 0 2.4rem;
    min-width: none;


    > a {
      left: 10rem;
    }

    > img {
      width: 17.6rem;
    }

    #description_card {
      display: initial;
      font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_R};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      white-space: normal;

      margin-top: 1.5rem;
    }

    > button {
      left: 9rem;
    }

    > div {
      p {
        font: ${({ theme }) => theme.FONTS.POPPINS_300_B};
      }

      span {
        font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_R};
      }
    }

    #card_controls {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1.4rem;

      width: auto;
      margin-top: 1.5rem;
      margin-bottom: 3.2rem;

      > div {
        margin: 0;
      }

      > button {
        margin: 0;
      }
    }
  }
`;
