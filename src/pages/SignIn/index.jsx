import {Container, Form, Background} from './styles';
import {GoMail} from 'react-icons/go';
import {LuLock} from "react-icons/lu";

import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {TextButton} from "../../components/TextButton";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <span>Application to keep up with everything you watch</span>

        <h2>Do your Log-in</h2>

        <div className="input-group">
          <Input type="email" placeholder="E-mail" icon={GoMail} />
          <Input type="password" placeholder="Password" icon={LuLock} />
        </div>

        <Button title="Enter" type="submit" />
        <TextButton to="/register" title="Create account" />
      </Form>

      <Background />
    </Container>
  );
};