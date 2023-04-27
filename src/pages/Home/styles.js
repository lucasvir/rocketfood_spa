import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 2.4rem;
    padding: 0 2.8rem;
  }

  @media only screen and (min-width: 768px) {
    main {
      padding: 0 12.4rem;
    }
  }
`;
