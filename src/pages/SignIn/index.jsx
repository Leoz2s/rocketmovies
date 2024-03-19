import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import {GoMail} from 'react-icons/go';
import {LuLock} from "react-icons/lu";

import {Container, Form, Background} from './styles';
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {TextButton} from "../../components/TextButton";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {signIn} = useAuth();

  function handleSignIn() {
    signIn({email, password});
  };

  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <span>Application to keep up with everything you watch</span>

        <h2>Do your Log-in</h2>

        <div className="input-group">
          <Input 
            type="email" 
            placeholder="E-mail"
            icon={GoMail}
            onChange={e => setEmail(e.target.value)} 
            />
          <Input 
            type="password" 
            placeholder="Password" 
            icon={LuLock}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <Button 
          title="Enter" 
          onClick={handleSignIn}
        />
        <TextButton to="/register" title="Create account" />
      </Form>

      <Background />
    </Container>
  );
};