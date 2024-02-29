import {Container} from './styles';
import {Link} from 'react-router-dom';
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
    	    <Link to="/new-movie">
            <Button title="Add movie" icon={<GrAdd />} />
          </Link>
        </div>

        <div id="movies-cards">
          <MovieCard to="/movie-details/1" 
            data={{ title: "Batman", 
              rating: 4, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
            }} />

          <MovieCard to="/movie-details/1" 
          data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} />

          <MovieCard to="/movie-details/1" 
            data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} />

          <MovieCard to="/movie-details/1" 
            data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} />

          <MovieCard to="/movie-details/1" 
            data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} />

          <MovieCard to="/movie-details/1" 
            data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} />
        </div>

      </main>
    </Container>
  );
};