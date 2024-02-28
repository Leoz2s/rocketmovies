import {Container, Profile} from './styles';
import { Link } from 'react-router-dom';

import {Input} from '../Input';

export function Header() {
  return(
    <Container>
      <h1>Rocket Movies</h1>

      <Input placeholder="Search for title" />

      <Profile>
        <div>
          <Link to="/profile">Leonardo Santos</Link>
          <Link to="/">Leave</Link>
        </div>


        <img src="https://github.com/Leoz2s.png" alt="User picture" />
      </Profile>
    </Container>
  );
};