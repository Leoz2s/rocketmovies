import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { Link } from 'react-router-dom';

import {Container, Profile} from './styles';
import {Input} from '../Input';

export function Header() {
  const {signOut, user} = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return(
    <Container>
      <Link to="/">
        <h1>Rocket Movies</h1>
      </Link>

      <Input placeholder="Search for title" />

      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>
          <Link onClick={signOut} >Leave</Link>
        </div>

        <img src={avatarURL} alt="User picture" />
      </Profile>
    </Container>
  );
};