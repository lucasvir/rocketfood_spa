import styled from "styled-components";

export const Container = styled.button`
  width: auto;
  height: 4.8rem;

  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 0.8rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

  margin-bottom: 3.2rem;
  padding: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font: ${({ theme }) => theme.FONTS.POPPINS_100_M};
  white-space: nowrap;

  > img {
    width: 3.2rem;
  }
`;
