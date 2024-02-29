import {styled} from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.6rem;

  border-radius: 1rem;
  border: ${({theme, $isNew}) => $isNew ? `.1rem dashed ${theme.COLORS.GRAY_900}` : 'none'};
  background-color: ${({theme, $isNew}) => $isNew ? "transparent" : theme.COLORS.BACKGROUND_500};

  padding: .5rem 1.5rem;
  width: fit-content;

  font-family: 'Roboto', sans-serif;
  
  > input {
    width: fit-content;

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