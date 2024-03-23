import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import {GoArrowLeft} from 'react-icons/go';

import {Container} from './styles';
import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {MovieTag} from '../../components/MovieTag';
import {Button} from '../../components/Button';

export function NewMovie() {
  const [title, setTitle] = useState();
  const [rating, setRating] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    if(newTag !== "") {
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    };
  };

  function handleRemoveTag(deletedTag) {
    setTags(prevState => prevState.filter(tag => tag !== deletedTag));
  };

  async function handleNewMovie() {
    if(!title) {
      return alert("The movie needs a title.");
    }else if(newTag) {
      return alert("You left a tag in the new tag field, click to add it or remove the content.")
    }else if(rating > 5 || rating < 0) {
      return alert("The rating value must be between 0 and 5.")
    };

    try {
      await api.post("/movies", {title, rating, description, tags});
  
      alert("New movie created with success!")
      navigate("/");
    }catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      }else {
        alert("Adding the new movie was not possible.");
        console.error(error);
      };
    };
  };

  function handleDeleteMovie() {
    navigate("/");
  };

  return(
    <Container>
      <Header />

      <main>
        <div className="return-title">
            <TextButton to="/" title="Return" icon={GoArrowLeft} />
          <h2>New movie</h2>
        </div>

        <div className="inputs-group">
          <Input 
            type="text" 
            placeholder="Title" 
            onChange={e => setTitle(e.target.value)}  
          />
          <Input 
            type="number" 
            placeholder="Your rating (from 0 to 5)" 
            onChange={e => setRating(e.target.value)}
          />
        </div>

        <Textarea 
          placeholder="Observations" 
          onChange={e => setDescription(e.target.value)}
        />

        <div className="tags-section">
          <h3>Tags</h3>
          <div className="tags-group">
            {
              tags.map((tag, index) => (
                <MovieTag 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }
            <MovieTag 
              isNew 
              placeholder="New tag"
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>
        </div>

        <div className="buttons-group">
          <Button 
            title="Delete movie" 
            onClick={handleDeleteMovie} 
          />
          <Button 
            title="Save changes"
            onClick={handleNewMovie}
          />
        </div>
      </main>
    </Container>
  );
};