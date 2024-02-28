import {styled} from 'styled-components';

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.PINK_900};
  padding: 3.2rem;
  border-radius: 1.6rem;
  
  width: 105.7rem;

  display: grid;
  gap: 1.5rem;

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  .tags {
    display: flex;
    gap: 1rem;
  }
`;