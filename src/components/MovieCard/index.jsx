import {Container} from './styles';

import {Tag} from '../Tag';
import {RatingStars} from '../RatingStars';

export function MovieCard({title, rating, description, tag, to}) {
  return(
    <Container to={to}>
      <div className="title-rating">
        <h3>{title}</h3>
        <RatingStars rating={rating} />
      </div>

      <p>{description}</p>
      
      <div className="tags">
        <Tag title={tag} />
        <Tag title={tag} />
        <Tag title={tag} />
      </div>

    </Container>
  );
};