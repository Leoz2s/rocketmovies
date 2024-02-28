import {styled} from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_500};

  font-family: 'Roboto', sans-serif;
  color: ${({theme}) => theme.COLORS.WHITE_300};

  padding: .5rem 1.5rem;
  border-radius: 1rem;

  width: fit-content;

  display: flex;
  align-content: center;
  gap: 1.6rem;

  > svg {
    color: ${({theme}) => theme.COLORS.PINK_100};
  }

`;