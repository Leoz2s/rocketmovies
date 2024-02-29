import {styled} from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  padding: 1.9rem 2.4rem;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_600};
  border-radius: 1rem;

  resize: none;
    
  color: ${({theme}) => theme.COLORS.WHITE_100};
  
  &:placeholder {
    color: ${({theme}) => theme.COLORS.GRAY_900};
  }
`;