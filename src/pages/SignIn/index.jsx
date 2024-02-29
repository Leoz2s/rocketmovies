import {Container} from './styles';

import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {TextButton} from "../../components/TextButton";

export function SignIn() {
  return(
    <Container>
      <h1>Rocket Movies</h1>
      <span>Application to follow up everything you watch</span>

      <h2>Do your Log-in</h2>

      <Input type="email" />
      <Input type="password" />

      <Button />
      <TextButton />

      <img src="../../assets/movie-theater.png" alt="Movie theater picture" />
    </Container>
  );
};