import {Container} from './styles';
import {Link} from 'react-router-dom';
import {GoArrowLeft, GoX, GoPlus} from 'react-icons/go';

import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Input} from '../../components/Input';
import {Textarea} from '../../components/Textarea';
import {Tag} from '../../components/Tag';
import {Button} from '../../components/Button';

export function NewMovie() {
  return(
    <Container>
      <Header />

      <main>
        <div className="return-title">
          <Link to="/">
            <TextButton title="Return" icon={GoArrowLeft} />
          </Link>
          <h2>New movie</h2>
        </div>

        <div className="inputs-group">
          <Input placeholder="Title" />
          <Input placeholder="Your rating (from 0 to 5)" />
        </div>

        <Textarea placeholder="Observations" />

        <div className="tags-section">
          <h3>Tags</h3>
          <div className="tags-group">
            <Tag title="React" icon={GoX} />
            <Tag isNew icon={GoPlus} />
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