import {styled} from 'styled-components';

export const Container = styled.div`
  header {
    background-color: ${({theme}) => theme.COLORS.PINK_900};

    height: 15vw;

    > a {
      color: ${({theme}) => theme.COLORS.PINK_100};

      svg {
        --icon-size: 4rem;
        height: var(--icon-size);
        width: var(--icon-size);
      }
    }
  }
`;

export const Form = styled.form`
  margin: 0 auto;
  
  display: grid;
  gap: 1rem;
  justify-content: center;

  .user-picture {
    justify-self: center;
    
    position: relative;

    > img {
      border-radius: 50%;

      --image-size: 20rem;
      height: var(--image-size);
      width: var(--image-size);

      margin-top: -12rem;
    }

    > div {
      position: absolute;
      right: 1rem;
      bottom: 1rem;

      background-color: ${({theme}) => theme.COLORS.PINK_100};
      padding: 1.4rem;
      border-radius: 50%;
      
      svg {
        --icon-size: 2.5rem;
          height: var(--icon-size);
          width: var(--icon-size);
      }
    }
  }
`;