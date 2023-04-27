import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 12rem;

  align-self: center;

  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.GRADIENT_200};

  margin-top: 4rem;
  margin-bottom: 6.2rem;

  > img {
    width: 18.6rem;
    align-self: end;
    margin-left: -3rem;
  }

  > div {
    margin-top: 2.5rem;

    h3 {
      font: 600 1.6rem/25.2px "Poppins";
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font: 400 1.1rem/16.8px "Poppins";
    }
  }

  @media only screen and (min-width: 1086px) {
    height: 26rem;

    margin-top: 16.4rem;

    > img {
      width: auto;

      margin-left: -5rem;
    }

    > div {
      margin: 0;

      h3 {
        font: ${({ theme }) => theme.FONTS.POPPINS_500_M};
      }

      p {
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};

        margin-top: 0.8rem;
      }
    }
  }
`;
