import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  margin: 1.2rem 0 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  font: ${({ theme }) => theme.FONTS.ROBOTO_BIG_B};
`;
