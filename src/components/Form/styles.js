import styled from "styled-components";

export const Container = styled.form`
  width: 100%;

  > label {
    font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    margin-bottom: 1.6rem;
  }
`;
