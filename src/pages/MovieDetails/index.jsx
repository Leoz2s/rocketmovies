import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {GoArrowLeft, GoClock} from 'react-icons/go';

import {Container} from './styles';
import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Tag} from '../../components/Tag';
import {RatingStars} from '../../components/RatingStars';

export function MovieDetails() {
  const [movieData, setMovieData] = useState("");
  const movie_id = 2;

  const {user} = useAuth();

  useEffect(() => {
    async function fetchMovieData() {
      const response = await api.get(`/movies/${movie_id}`);
      setMovieData(response.data);
      console.log(response.data)
    };
    fetchMovieData();
  }, []);

  return(
    <Container>
      <Header />

      <main>
        <div className="section">
          <TextButton to="/" title="Return" icon={GoArrowLeft} />
          <div className="title-rating">
            <h2>{movieData.title}</h2>
            <RatingStars rating={movieData.rating} />
          </div>

          <div className="user-date">
            <img src="https://github.com/Leoz2s.png" alt="User picture" />
            <span>By {user.name}</span>
            <GoClock />
            <span>
              {/* 28/02/2024 às 22:05 */}
              {movieData.created_at}
            </span>
          </div>
        </div>

        <div className="tags-group">
          {
            movieData.tags.map((tag, index) => (
              <Tag key={index} title={tag.name} />
            ))
          }
        </div>

        <p>
          {movieData.description}
        </p>
      </main>
    </Container>
  );
};