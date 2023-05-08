import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  > main {
    padding: 0 2.8rem;

    #back_button {
      font: 500 1.6rem/2.3rem 'Poppins';

      margin-top: 1rem;
      margin-bottom: 3.2rem;
    }

    h2 {
      font: ${({ theme }) => theme.FONTS.POPPINS_400_M};
      margin-bottom: 2.4rem;
    }

    > form {
      label {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
      }

      #description {
        margin-top: 1.6rem;
      }

      button {
        margin-top: 2.4rem;
        background-color: ${({ theme }) =>
          theme.COLORS.TINTS_TOMATO_400};
      }

      select {
        width: 100%;
        height: 4.8rem;

        border: none;
        border-radius: 0.8rem;
        outline: none;

        font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background-color: ${({ theme }) => theme.COLORS.DARK_900};

        padding: 1.2rem 1.4rem;
        margin-top: 1.6rem;
        margin-bottom: 3.2rem;

        &::placeholder {
          color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        option {
          font: ${({ theme }) => theme.FONTS.ROBOTO_SMALL_R};
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
      }
      #image_dish {
        input::file-selector-button {
          border: none;
          background-color: transparent;
          color: white;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    > main {
      height: 100vh;

      padding: 1.2rem 12.3rem 6rem;

      form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
          'header header header header'
          'image name name category'
          'ingred ingred ingred price'
          'description description description description'
          'button button button button';

        justify-content: center;
        column-gap: 3.2rem;

        align-items: center;

        > header {
          grid-area: header;
        }

        > div:nth-child(2) {
          grid-area: image;
        }

        > div:nth-child(3) {
          grid-area: name;
        }

        > div:nth-child(4) {
          grid-area: category;
        }

        > div:nth-child(5) {
          grid-area: ingred;
        }
        > div:nth-child(6) {
          grid-area: price;
        }

        > div:nth-child(7) {
          grid-area: description;
        }

        > button {
          grid-area: button;
          place-self: end;
        }
      }
    }
  }
`;
