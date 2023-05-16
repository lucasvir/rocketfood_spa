import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;

  gap: 1.2rem;

  border: none;
  border-radius: 0.8rem;
  outline: none;

  overflow: auto;

  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 0 0.8rem;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
`;
