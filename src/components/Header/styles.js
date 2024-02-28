import {styled} from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2.4rem 12.3rem;

  border-bottom-style: solid;
  border-bottom-width: .1rem;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_400};

  margin-bottom: 5rem;

  > a h1 {
    color: ${({theme}) => theme.COLORS.PINK_100};
  }

  > div:nth-child(2) {
    width: 58.2rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  gap: .9rem;

  > div {
    display: grid;
    justify-items: flex-end;
    align-content: center;

    a:nth-child(1) {
      color: ${({theme}) => theme.COLORS.WHITE_200};
    }

    a:nth-child(2) {
      color: ${({theme}) => theme.COLORS.GRAY_900};
    }
  }

  > img {
    --picture-size: 6.4rem;
    width: var(--picture-size);
    height: var(--picture-size);

    border: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_400};
    border-radius: 50%;
  }
`;