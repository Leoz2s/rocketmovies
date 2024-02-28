import {styled} from 'styled-components';

export const Container = styled.div`
  > main {
    display: grid;
    justify-content: center;
    gap: 4rem;

    .return-title h2 {
      margin-top: 2.4rem;
    }

    .inputs-group {
      display: flex;
      gap: 4rem;
    }

    textarea {
      height: 23.6rem;
    }

    .tags-section {
      h3 {
        margin-bottom: 2.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_800};
      }
    
      .tags-group {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 1.6rem;
        border-radius: .8rem;

        display: flex;
        gap: 2.4rem;
  
        div {
          padding: 1.6rem;
        }
      }
    }

    .buttons-group {
      display: flex;
      gap: 4rem;

      button {
        width: 100%;
      }

      button:nth-child(1) {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.PINK_100};
      }
    }
  }
`;