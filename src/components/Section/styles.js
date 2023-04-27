import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-bottom: 2.4rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font: 500 1.8rem/25.2px "Poppins";

    margin-bottom: 2.4rem;
  }

  @media only screen and (min-width: 1024px) {
    > h2 {
      font: ${({ theme }) => theme.FONTS.POPPINS_400_M};
    }
  }
`;
