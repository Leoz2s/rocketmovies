import {Container, Form, Background} from './styles';
import { FaRegUser } from "react-icons/fa";
import {GoArrowLeft, GoMail} from 'react-icons/go';
import {LuLock} from "react-icons/lu";

import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {TextButton} from "../../components/TextButton";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <span>Application to keep up with everything you watch</span>

        <h2>Create your account</h2>

        <div className="input-group">
          <Input type="text" placeholder="Name" icon={FaRegUser} />
          <Input type="email" placeholder="E-mail" icon={GoMail} />
          <Input type="password" placeholder="Password" icon={LuLock} />
        </div>

        <Button title="Register" type="submit" />
        <TextButton to="/" title="Return to Log-in" icon={GoArrowLeft} />
      </Form>

      <Background />
    </Container>
  );
};