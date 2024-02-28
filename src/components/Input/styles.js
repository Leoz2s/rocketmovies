import {styled} from 'styled-components';

export const Container = styled.input`
  padding: 1.9rem 2.4rem;
  width: 58.2rem;

  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  color: ${({theme}) => theme.COLORS.WHITE_100};

  border: none;
  border-radius: 1rem;

  &placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_900};
  }
`;