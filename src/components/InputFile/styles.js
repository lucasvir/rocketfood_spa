import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.8rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  border: none;
  border-radius: 0.8rem;
  outline: none;

  font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 1.2rem 2.4rem;
  margin-top: 1.6rem;
  margin-bottom: 3.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  p {
    font: ${({ theme }) => theme.FONTS.POPPINS_100_M};
    width: 100%;
  }

  > input {
    position: absolute;
    opacity: 0;
  }
`;
