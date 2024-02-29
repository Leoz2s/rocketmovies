import {styled} from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  gap: 1.6rem;

  border: ${({theme, isNew}) => isNew ? `.1rem solid dashed ${theme.COLORS.GRAY_300}` : 'none'};
  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_500};

  padding: .5rem 1.5rem;
  width: fit-content;
  border-radius: 1rem;

  font-family: 'Roboto', sans-serif;
  
  > input {
    background: transparent;
    
    color: ${({theme}) => theme.COLORS.WHITE_300};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  > button {
    color: ${({theme}) => theme.COLORS.PINK_100};
    background: none;
  }
`;