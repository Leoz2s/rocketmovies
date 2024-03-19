import { useState } from 'react';
import {api} from "../../services/api";
import { useNavigate } from 'react-router-dom';

import { FaRegUser } from "react-icons/fa";
import {GoArrowLeft, GoMail} from 'react-icons/go';
import {LuLock} from "react-icons/lu";

import {Container, Form, Background} from './styles';
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {TextButton} from "../../components/TextButton";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Fulfill all the fields to register!");
    };

    api.post("/users", {name, email, password})
      .then(() => {
        alert("User registered.");
        navigate("/");
      })
      .catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        }else {
          alert("Register was not possible.");
        };
      });
  };

  function handleReturn() {
    navigate(-1);
    console.log("a");
  };

  return(
    <Container>
      <Form>
        <h1>Rocket Movies</h1>
        <span>Application to keep up with everything you watch</span>

        <h2>Create your account</h2>

        <div className="input-group">
          <Input 
            type="text" 
            placeholder="Name" 
            icon={FaRegUser}
            onChange={e => setName(e.target.value)}
          />

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
          title="Register"
          onClick={handleSignUp} 
        />

        <TextButton
          to="/"
          // onClick={handleReturn} 
          title="Return to Log-in" 
          icon={GoArrowLeft} 
        />
      </Form>

      <Background />
    </Container>
  );
};