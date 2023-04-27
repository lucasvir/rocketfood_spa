import styled from "styled-components";

export const Container = styled.span`
  height: 3.2rem;

  display: flex;
  align-items: center;

  padding: 0.6rem;

  border-radius: 0.5rem;

  font: ${({ theme }) => theme.FONTS.POPPINS_100_M};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
