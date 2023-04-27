import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  color: #e1e1e6;
  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};

  border: none;
  border-radius: 0.6rem;
  outline: none;

  resize: none;

  padding: 1.4rem;

  &::placeholder {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }
`;
