import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.8rem;

  background-color: ${({ theme }) => theme.COLORS.LIGHT_500};

  border: none;
  border-radius: 0.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 0.6rem 1.4rem;

  > p {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > a {
    img {
      width: 0.8rem;
    }
  }
`;
