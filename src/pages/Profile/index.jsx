import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import {GoArrowLeft, GoMail} from 'react-icons/go';
import { FaCamera } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { LuLock } from "react-icons/lu";

import {Container, Form} from './styles';
import {TextButton}  from '../../components/TextButton';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

export function Profile() {
  const {user, updateProfile} = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [nameOrEmailChanged, setNameOrEmailChanged] = useState(false);

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  function handleAvatarChange(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  async function handleUpdate() {
    if(!newPassword && !nameOrEmailChanged && !avatarFile) {
      console.log(avatarFile)
      return alert("You need to insert new data to update.");
    };

    try {
      let newProfileAvatar;
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        newProfileAvatar = response.data.avatar;
      };
      
      const response = await api.put("/users", {name, email, old_password: oldPassword, password: newPassword });
      const {user: updatedUser, changesMessage} = response.data;
      updateProfile(updatedUser, newProfileAvatar);
  
      if(changesMessage.length === 3) {
        if(newProfileAvatar) {
          alert(`Your avatar, name, e-mail and password are updated!`);
        }else {
          alert(`Your name, e-mail and password are updated!`);
        };

      }else if(changesMessage.length === 2) {
        let changesInfo = "";

        const hasName = changesMessage.includes(`Name changed.`);
        changesMessage.map(change => {
          switch (change) {
            case `Name changed.`:
              changesInfo = `name`;
              break;
            case `E-mail changed.`:
              if(hasName) {
                changesInfo = (changesInfo + ` and e-mail`);
              }else {
                changesInfo = (changesInfo + `e-mail`);
              };
              break;
            case `Password changed.`:
                changesInfo = (changesInfo + ` and password`);
              break;
            default:
              break;
          };
        });
        if(newProfileAvatar) {
          alert(`Your avatar, ${changesInfo} are updated!`);
        }else {
          alert(`Your ${changesInfo} are updated!`);
        };

      }else if(changesMessage.length === 1) {
        let changesInfo = "";
        switch (String(changesMessage)) {
          case `Name changed.`:
            changesInfo = `name`;
            break;
          case `E-mail changed.`:
            changesInfo = `e-mail`;
            break;
          case `Password changed.`:
            changesInfo = `password`;
            break;
          default:
            break;
        };
        if(newProfileAvatar) {
          alert(`Your avatar and ${changesInfo} are updated!`);
        }else {
          alert(`Your ${changesInfo} is updated!`);
        };

      }else if(newProfileAvatar) {
        alert(`Your avatar is updated.`)
      }else {
        alert(`Your profile data is updated!`);
      };

      setAvatarFile(null);
      setNameOrEmailChanged(false);

    }catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert("Updating profile was not possible.");
        console.error(error)
      };
    };
  };

  return(
    <Container>
      <header>
          <TextButton to="/" title="Return" icon={GoArrowLeft} />
      </header>

      <Form>
        <div className="user-picture">
          <img src={avatar} alt="User picture" />

          <label htmlFor='avatar'>
            <FaCamera />
            <input 
              type="file" 
              id="avatar" 
              onChange={handleAvatarChange}
            />
          </label>
        </div>

        <div className="form-inputs">
          <Input 
            placeholder="Name" 
            icon={FaRegUser} 
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value)
              setNameOrEmailChanged(true)
            }}
          />
          <Input 
            placeholder="example@email.com"
            type="email" 
            icon={GoMail} 
            value={email}
            onChange={e => {
              setEmail(e.target.value)
              setNameOrEmailChanged(true)
            }}
          />

          <Input 
            placeholder="Actual password" 
            type="password" 
            icon={LuLock} 
            onChange={e => setOldPassword(e.target.value)}
          />
          <Input 
            placeholder="New password" 
            icon={LuLock} 
            type="password" 
            onChange={e => setNewPassword(e.target.value)}
          />

          <Button title="Save" onClick={handleUpdate} />
        </div>
      </Form>
    </Container>
  );
};