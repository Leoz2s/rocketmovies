import {styled} from 'styled-components';

export const Container = styled.div`  
  > main {
    max-width: 50%;
    margin: 0 auto;

    display: grid;
    gap: 4rem;

    .title-rating {
      display: flex;
      gap: 1.9rem;

      margin-block: 2.4rem;
    }


    .user-date {
      display: flex;
      align-items: center;
      gap: .8rem;

      font-family: 'Roboto', sans-serif;

      img {
        --image-size: 1.6rem;
        width: var(--image-size);
        height: var(--image-size);

        border-radius: 50%;
      }

      svg {
        color: ${({theme}) => theme.COLORS.PINK_100};
      }
    }

    .tags-group {
      display: flex;
      gap: .8rem;

      div {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
      }
    }
  }
`;