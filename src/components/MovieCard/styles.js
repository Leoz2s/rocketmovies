import {styled} from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background-color: ${({theme}) => theme.COLORS.PINK_900};
  padding: 3.2rem;
  border-radius: 1.6rem;
  
  width: 105.7rem;

  display: grid;
  gap: 1.5rem;

  .title-rating div {
    margin-top: .8rem;

    color: ${({theme}) => theme.COLORS.PINK_100};
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_800};
  }

  .tags {
    display: flex;
    gap: 1rem;
  }
`;