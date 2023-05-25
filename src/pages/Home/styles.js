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

  @media only screen and (min-width: ${({ theme }) => theme.QUERYS.TABLET_100}) {
    main {
      padding: 0 6rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.QUERYS.DESKTOP_100}) {
    main {
      padding: 0 10rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.QUERYS.FULL_100}) {
    main {
      padding: 0 24rem;
    }
  }
`;
