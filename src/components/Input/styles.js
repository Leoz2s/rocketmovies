import {styled} from 'styled-components';

export const Container = styled.div`
  > label {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  
    width: 100%;
    padding: 1.9rem 2.4rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
    border-radius: 1rem;

    cursor: text;

    input {
      width: 100%;
      background: transparent;
      
      color: ${({theme}) => theme.COLORS.WHITE_100};
    
      &:placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_900};
      }
    }

    svg {
      color: ${({theme}) => theme.COLORS.GRAY_900};
    }
  }

`;