import {Container, Form} from './styles';
import { Link } from 'react-router-dom';

import {GoArrowLeft, GoMail} from 'react-icons/go';
import { FaCamera } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { LuLock } from "react-icons/lu";

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {TextButton}  from '../../components/TextButton';

export function Profile() {
  return(
    <Container>
      <header>
          <TextButton to="/" title="Return" icon={GoArrowLeft} />
      </header>

      <Form>
        <div className="user-picture">
          <img src="https://github.com/Leoz2s.png" alt="User picture" />
          <label htmlFor='avatar'>
            <FaCamera />
            <input type="file" id="avatar" />
          </label>
        </div>

        <div className="form-inputs">
          <Input placeholder="Name" type="text" icon={FaRegUser} />
          <Input placeholder="example@email.com" type="email" icon={GoMail} />

          <Input placeholder="Actual password" type="password" icon={LuLock} />
          <Input placeholder="New password" type="password" icon={LuLock} />

          <Button title="Save" type="submit" />
        </div>
      </Form>
    </Container>
  );
};