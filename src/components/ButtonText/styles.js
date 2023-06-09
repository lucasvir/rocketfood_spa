import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  cursor: pointer;
  transition: filter 0.2s;

  > p {
    font: 500 2.4rem/33.6px "Poppins";
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
