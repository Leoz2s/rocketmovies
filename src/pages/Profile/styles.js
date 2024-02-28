import {styled} from 'styled-components';

export const Container = styled.div`
  header {
    background-color: ${({theme}) => theme.COLORS.PINK_900};

    height: 14.4rem;

    position: relative;

    > a {
      position: absolute;
      top: 42%;
      left: 25%;
    }
  }
`;

export const Form = styled.form`  
  display: grid;
  justify-content: center;

  > .user-picture {
    justify-self: center;
    
    margin-top: -9.5rem;
    margin-bottom: 6.4rem;
    
    position: relative;

    img {
      border-radius: 50%;

      --image-size: 18.6rem;
      height: var(--image-size);
      width: var(--image-size);
    }

    label {
      position: absolute;
      right: 1rem;
      bottom: 1rem;

      background-color: ${({theme}) => theme.COLORS.PINK_100};
      padding: 1.4rem;
      border-radius: 50%;
      
      cursor: pointer;

      svg {
        --icon-size: 2rem;
          height: 1.6rem;
          width: var(--icon-size);

          color: ${({theme}) => theme.COLORS.BACKGROUND_500};
      }
    }

    input {
      display: none;
    }
  }

  > .form-inputs {  
    display: grid;
    gap: .8rem;

    div {
      width: 34rem;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.WHITE};
      }
    }

    div:nth-child(1),  div:nth-child(2) {      
      &:placeholder {
        color: ${({theme}) => theme.COLORS.WHITE};
      }
    }

    div:nth-child(2), div:nth-last-child(2) {
      margin-bottom: 2.4rem;
    }
  }


`;