import {Container} from './styles';
import { FaRegStar, FaStar } from "react-icons/fa";

export function RatingStars({rating}) {
  return(
    <Container>
      {rating > 0 ? <FaStar/> : <FaRegStar /> }
      {rating > 1 ? <FaStar/> : <FaRegStar /> }
      {rating > 2 ? <FaStar/> : <FaRegStar /> }
      {rating > 3 ? <FaStar/> : <FaRegStar /> }
      {rating > 4 ? <FaStar/> : <FaRegStar /> }
    </Container>
  );
};