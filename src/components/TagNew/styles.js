import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 0.6rem;
  padding: 0.6rem 1.4rem;

  border: 1.6px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
  border-radius: 0.6rem;

  > input {
    width: 9rem;

    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    background-color: transparent;
    border: none;
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > button {
    margin-top: 0;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100} !important;
    background-color: transparent !important;

    img {
      border: none;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      background-color: transparent;

      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;
