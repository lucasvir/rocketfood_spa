import styled from 'styled-components';

export const Container = styled.header`
  width: 100vw;
  height: 11.4rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 3.2rem;

  padding: 5.6rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > img:first-child {
    width: 2.4rem;
  }

  > img:last-child {
    width: 3.2rem;
  }

  > button {
    width: auto;

    display: flex;
    align-items: center;

    padding: 1.6rem 4.6rem;
    margin: 0;
  }

  #logo_header {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    gap: 0.8rem;

    > img {
      width: 2.4rem;
      height: 2.4rem;
    }

    #logo_text {
      font: ${({ theme }) => theme.FONTS.ROBOTO_BIGGER_B};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      white-space: nowrap;
    }

    > span {
      font: ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_R};
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};

      /* margin-left: -4rem;
      margin-right: 4rem; */
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 2.4rem 24rem;
    justify-content: space-between;
  }
`;
