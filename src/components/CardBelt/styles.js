import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  overflow: scroll;
  gap: 1.6rem;

  padding-bottom: 1.6rem;

  @media only screen and (min-width: 1024px) {
    gap: 2.7rem;
  }
`;
