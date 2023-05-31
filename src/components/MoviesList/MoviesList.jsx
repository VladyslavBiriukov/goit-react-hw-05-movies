/* eslint-disable jsx-a11y/img-redundant-alt */
import { MovieItem, LinkStyled,Image, Title } from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TheMovieDbAPI } from 'components/services/api';
// import { Loader } from 'components/Loader/Loader';

export function MoviesList({ id, title, poster_path }) {
    const location = useLocation();
  return (
    <MovieItem key={id}>
      <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
        { poster_path ? <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} /> : <img src='https://via.placeholder.com/270x400' alt='image not found' />}        
        <Title>{title}</Title>
      </LinkStyled>
    </MovieItem>
  );
}


MoviesList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};