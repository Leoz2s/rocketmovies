import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import {GoArrowLeft, GoClock} from 'react-icons/go';

import {Container} from './styles';
import {Header} from '../../components/Header';
import {TextButton} from '../../components/TextButton';
import {Tag} from '../../components/Tag';
import {RatingStars} from '../../components/RatingStars';

export function MovieDetails() {
  const {user} = useAuth();

  const [movieData, setMovieData] = useState(null);
  
  const params = useParams();
  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleReturn() {
    navigate("/");
  };

  function handleEdit() {
    navigate(`/new-movie/${params.id}`);
  };

  useEffect(() => {
    async function fetchMovieData() {
      const response = await api.get(`/movies/${params.id}`);
      setMovieData(response.data);
    };
    fetchMovieData();
  }, []);

  return(
    <Container>
      <Header />

      { movieData &&
        <main>
          <div className="section">
            <TextButton onClick={handleReturn} title="Return" icon={GoArrowLeft} />

            <div className="title-rating">
              <h2>{movieData.title}</h2>
              <RatingStars rating={movieData.rating} />
            </div>

            <div className="user-date">
              <img src={avatarURL} alt="User picture" />
              <span>By {user.name}</span>

              <div></div>

              <GoClock />
              <span>
                {/* 28/02/2024 às 22:05 */}
                {movieData.created_at}
              </span>

              <div></div>

              <TextButton title="Edit movie details" onClick={handleEdit} />
            </div>
          </div>

          <div className="tags-group">
            {
              movieData.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))
            }
          </div>
          

          <p>
            {movieData.description}
          </p>
        </main>
      }
    </Container>
  );
};