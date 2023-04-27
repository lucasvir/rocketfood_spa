import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.6rem;

  background-color: transparent;

  border: 1.6px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.6rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 0.6rem 1.4rem;

  > input {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    width: 7rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: transparent;
    border: none;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > a {
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
