import {styled} from 'styled-components';
import backgroundImg from "../../assets/movie-theater.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: grid;
  align-content: center;

  h1 {
    color: ${({theme}) => theme.COLORS.PINK_100};
    font-size: 4.8rem;
  }

  h2 {
    margin-block: 4.8rem;
  }

  .input-group {
    display: grid;
    gap: 1rem;

    margin-bottom: 2.4rem;
  }

  button {
    width: 100%;

    margin-bottom: 4.2rem;
  }

  a {
    margin: 0 auto;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;