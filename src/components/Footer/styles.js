import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  height: 7.6rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  #logo_footer {
    width: 36%;
    display: flex;
    align-items: center;
    gap: 0.6rem;

    font: 700 1.5rem/1.8rem "Roboto";
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
  }

  > span {
    font: 400 1rem "Poppins";
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media only screen and (min-width: 1024px) {
    #logo_footer {
      p {
        font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_B};
      }
    }
    > span {
      font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_R};
    }
  }
`;
