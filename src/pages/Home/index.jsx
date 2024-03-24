import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import {Link, useNavigate} from 'react-router-dom';

import {GrAdd} from 'react-icons/gr';

import {Container} from './styles';
import {Header} from '../../components/Header';
import { Button } from '../../components/Button';
import { MovieCard } from '../../components/MovieCard';
import { useAuth } from '../../hooks/auth';

export function Home() {
  const {search} = useAuth();
  
  const [movies, setMovies] = useState([]);
  
  const navigate = useNavigate();
  
  function handleDetails(id) {
    navigate(`/movie-details/${id}`);
  };
  
  useEffect(() => {
    async function fetchMovies() {
      const searchData = search ?? ""

      const response = await api.get(`/movies?title=${searchData}&tags=`);
      setMovies(response.data);
    };
    fetchMovies();
  }, [search]);

  return(
    <Container>
      <Header />
      
      <main>
        <div id="section">
          <h2>My movies</h2>
          <Link to="/new-movie">
            <Button title="Add movie" icon={<GrAdd />} />
          </Link>
        </div>

        <div id="movies-cards">
          {
            movies.map(movie => (
              <MovieCard
                key={String(movie.id)}
                data={{ title: movie.title, 
                  rating: movie.rating, 
                  description: movie.description,
                  tags: movie.tags,
                }} 
                onClick={() => handleDetails(movie.id)}
              />
            ))
          }
          {/* <MovieCard to="/movie-details/1" 
          data={{ title: "Batman", 
              rating: 3, 
              description: "Batman Movie",
              tags: [
                {id: '1', name: 'action'},
                {id: '2', name: 'adventure'},
                {id: '3', name: 'fantasy'},
              ]
              }} 
          /> */}
        </div>
      </main>
    </Container>
  );
};