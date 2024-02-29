import {Container} from './styles';

import {Tag} from '../Tag';
import {RatingStars} from '../RatingStars';

export function MovieCard({data, to}) {
  return(
    <Container to={to}>
      <div className="title-rating">
        <h3>{data.title}</h3>
        <RatingStars rating={data.rating} />
      </div>

      <p>{data.description}</p>
      
      <div className="tags">
        {
          data.tags &&
          <footer>
            {
              data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
            }
          </footer>
        }
      </div>

    </Container>
  );
};