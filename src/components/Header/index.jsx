import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Link, useNavigate } from 'react-router-dom';

import {Container, Profile} from './styles';
import {Input} from '../Input';
import { useState } from 'react';

export function Header() {
  const {signOut, user, searchMovies} = useAuth();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  };

  return(
    <Container>
      <Link to="/">
        <h1>Rocket Movies</h1>
      </Link>

      <Input 
        placeholder="Search for title" 
        onChange={e => searchMovies(e.target.value)}
      />

      <Profile>
        <div>
          <Link to="/profile">{user.name}</Link>
          <a onClick={handleSignOut} >Leave</a>
        </div>

        <img src={avatarURL} alt="User picture" />
      </Profile>
    </Container>
  );
};