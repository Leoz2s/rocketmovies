import {Container} from './styles';

import {Tag} from '../Tag';

export function MovieCard({title, rating, description, tag}) {
  return(
    <Container>
      <h3>{title}</h3>
      <div className="rating-stars">{rating}</div>
      <p>{description}</p>
      
      <div className="tags">
        <Tag title={tag} />
        <Tag title={tag} />
        <Tag title={tag} />
      </div>

    </Container>
  );
};