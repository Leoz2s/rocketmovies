import {styled} from 'styled-components';

export const Container = styled.button`
  padding: 1.4rem 3.2rem;
  background-color: ${({theme}) => theme.COLORS.PINK_100};

  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  border-radius: .8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;

  &:disabled {
    opacity: 0.5;
  }
`;