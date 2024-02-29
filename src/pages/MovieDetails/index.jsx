import {Container} from './styles';
import {GoArrowLeft, GoClock} from 'react-icons/go';

import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Tag} from '../../components/Tag';
import {RatingStars} from '../../components/RatingStars';


export function MovieDetails() {
  return(
    <Container>
      <Header />

      <main>
        <div className="section">
          <TextButton to="/" title="Return" icon={GoArrowLeft} />
          <div className="title-rating">
            <h2>Batman</h2>
            <RatingStars rating="3" />
          </div>

          <div className="user-date">
            <img src="https://github.com/Leoz2s.png" alt="User picture" />
            <span>Por Leonardo Santos</span>
            <GoClock />
            <span>28/02/2024 às 22:05</span>
          </div>
        </div>

        <div className="tags-group">
          <Tag title="action" />
          <Tag title="adventure" />
          <Tag title="fantasy" />
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores enim atque quisquam expedita quod architecto excepturi dolorem possimus dolor quo voluptatibus mollitia ullam deserunt totam inventore eum, amet natus ducimus!
        </p>
      </main>
    </Container>
  );
};