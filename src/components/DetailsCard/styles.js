import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.6rem;

  > img {
    margin-bottom: 1.6rem;
    width: 39rem;
  }

  > div {
    text-align: center;

    > h2 {
      font: 500 2.7rem/3.7rem "Poppins";
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 2.4rem;
    }

    > p {
      font: 400 1.6rem "Poppins";
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 2.4rem;
    }

    #controls {
      width: 100%;

      display: flex;
      align-items: center;
      gap: 1.6rem;

      margin-bottom: 5.4rem;

      > div {
        margin: 0;
      }

      > button {
        margin: 0;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 4.6rem;

    height: 100%;

    > div {
      text-align: start;

      h2 {
        font: ${({ theme }) => theme.FONTS.POPPINS_500_M};
      }

      p {
        font: ${({ theme }) => theme.FONTS.POPPINS_300_R};
      }
    }
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.6rem;

  text-align: center;

  margin-bottom: 3.6rem;

  @media only screen and (min-width: 1024px) {
    justify-content: start;
  }
`;
