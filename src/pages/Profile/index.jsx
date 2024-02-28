import {Container, Form} from './styles';
import { Link } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go';
import { FaCamera } from "react-icons/fa6";

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export function Profile() {
  return(
    <Container>
      <header>
        <Link>
          <GoArrowLeft/>
        </Link>
      </header>

      <Form>
        <div className="user-picture">
          <img src="https://github.com/Leoz2s.png" alt="User picture" />
          <div className="camera-icon">
            <FaCamera />
          </div>
        </div>

        <Input value="Name" />
        <Input value="mail@email.com"/>

        <Input placeholder="Actual password"/>
        <Input placeholder="New password" />

        <Button title="Save" />
      </Form>
    </Container>
  );
};