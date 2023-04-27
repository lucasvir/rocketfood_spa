import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  > main {
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-content: center;

    padding: 3.6rem 5.6rem 0;
  }

  @media only screen and (min-width: 1024px) {
    > main {
      padding: 3.6rem 12.3rem 0;
    }
  }
`;
