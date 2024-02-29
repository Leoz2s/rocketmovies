import {Container} from './styles';
import {GoArrowLeft} from 'react-icons/go';

import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {MovieTag} from '../../components/MovieTag';
import {Button} from '../../components/Button';

export function NewMovie() {
  return(
    <Container>
      <Header />

      <main>
        <div className="return-title">
            <TextButton to="/" title="Return" icon={GoArrowLeft} />
          <h2>New movie</h2>
        </div>

        <div className="inputs-group">
          <Input type="text" placeholder="Title" />
          <Input type="number" placeholder="Your rating (from 0 to 5)" />
        </div>

        <Textarea placeholder="Observations" />

        <div className="tags-section">
          <h3>Tags</h3>
          <div className="tags-group">
            <MovieTag value="React" />
            <MovieTag isNew placeholder="New tag" />
          </div>
        </div>

        <div className="buttons-group">
          <Button title="Delete movie" />
          <Button title="Save changes" />
        </div>
      </main>
    </Container>
  );
};