import {styled} from 'styled-components';

export const Container = styled.div`
  cursor: pointer;

  background-color: ${({theme}) => theme.COLORS.PINK_900};
  padding: 3.2rem;
  border-radius: 1.6rem;
  
  width: 105.7rem;

  display: grid;
  gap: 1.5rem;

  .title-rating {
    h3 {
      font-size: 2.4rem;
    }

    div {
      margin-top: .8rem;
    
      color: ${({theme}) => theme.COLORS.PINK_100};
    }
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  .tags footer {
    display: flex;
    gap: 1rem;
  }
`;