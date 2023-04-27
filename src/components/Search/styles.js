import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  border: none;
  border-radius: 0.8rem;
  outline: none;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  padding: 1.2rem 1.4rem;
  /* margin-top: 1.6rem; */

  > input {
    width: 100%;

    background: transparent;
    outline: none;
    border: none;

    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;
