import {Container} from './styles';
import {GrAdd} from 'react-icons/gr';

import {Header} from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';

export function Home() {
  return(
    <Container>
      <Header/>
      
      <main>
        <div id="section">
          <h2>My movies</h2>
          <Button title="Add movie" icon={<GrAdd />} />
        </div>

        <div id="movies-cards">
          <MovieCard title="Batman" rating="3" description="Batman Movie" tag="action" />
          <MovieCard title="Spider-man" rating="4" description="Spider-man Movie" tag="adventure" />
          <MovieCard title="Spider-man" rating="4" description="Spider-man Movie" tag="adventure" />
          <MovieCard title="Spider-man" rating="4" description="Spider-man Movie" tag="adventure" />
          <MovieCard title="Spider-man" rating="4" description="Spider-man Movie" tag="adventure" />
        </div>

      </main>
    </Container>
  );
};