import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  overflow: auto;
  gap: 1.6rem;

  padding-bottom: 1.6rem;

  @media only screen and (min-width: 1024px) {
    gap: 2.7rem;
  }
`;
